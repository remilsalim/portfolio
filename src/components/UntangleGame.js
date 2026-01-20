import { useState, useEffect, useRef } from 'react';
import { X, RefreshCw, CheckCircle } from 'lucide-react';

export default function UntangleGame({ isOpen, onClose }) {
    const canvasRef = useRef(null);
    const [level, setLevel] = useState(1);
    const [isSolved, setIsSolved] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [draggedNode, setDraggedNode] = useState(null);

    // Game Constants
    const NODE_RADIUS = 20;
    const LEVEL_CONFIG = {
        1: { nodes: 6, edges: 8 },
        2: { nodes: 8, edges: 12 },
        3: { nodes: 10, edges: 15 },
        4: { nodes: 12, edges: 20 },
    };

    const generateLevel = (lvl) => {
        const config = LEVEL_CONFIG[lvl] || LEVEL_CONFIG[4];
        const newNodes = [];
        const width = 600;
        const height = 400;

        // Generate random nodes
        for (let i = 0; i < config.nodes; i++) {
            newNodes.push({
                id: i,
                x: Math.random() * (width - 100) + 50,
                y: Math.random() * (height - 100) + 50,
            });
        }

        // Generate edges (ensure connected graph)
        const newEdges = [];
        // ... Simplified generation for demo: simply connect random pairs
        // In a real implementation, you'd ensure planarity is possible
        // For now, we rely on randomness and the user's ability to skip
        for (let i = 0; i < config.edges; i++) {
            const source = Math.floor(Math.random() * config.nodes);
            let target = Math.floor(Math.random() * config.nodes);
            while (source === target) target = Math.floor(Math.random() * config.nodes);

            // Avoid duplicates
            if (!newEdges.find(e => (e.source === source && e.target === target) || (e.source === target && e.target === source))) {
                newEdges.push({ source, target });
            }
        }

        setNodes(newNodes);
        setEdges(newEdges);
        setIsSolved(false);
    };

    useEffect(() => {
        if (isOpen) generateLevel(level);
    }, [isOpen, level]);

    // Intersection Logic
    const intersect = (p1, p2, p3, p4) => {
        // Check if line segment p1-p2 intersects p3-p4
        const ccw = (a, b, c) => (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x);
        return ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4);
    };

    const checkSolution = () => {
        let crossings = 0;
        for (let i = 0; i < edges.length; i++) {
            for (let j = i + 1; j < edges.length; j++) {
                const e1 = edges[i];
                const e2 = edges[j];

                // Share a node? Not a crossing
                if (e1.source === e2.source || e1.source === e2.target || e1.target === e2.source || e1.target === e2.target) continue;

                const n1 = nodes[e1.source];
                const n2 = nodes[e1.target];
                const n3 = nodes[e2.source];
                const n4 = nodes[e2.target];

                if (intersect(n1, n2, n3, n4)) {
                    crossings++;
                }
            }
        }
        if (crossings === 0) setIsSolved(true);
    };

    // Canvas Drawing
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Edges
            edges.forEach(edge => {
                const n1 = nodes[edge.source];
                const n2 = nodes[edge.target];

                // Check if this specific edge is crossed
                let isCrossed = false;
                // Simple check against all lines roughly
                // Ideally we cache this state

                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle = '#374151'; // standard gray
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            // Draw Nodes
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2);
                ctx.fillStyle = isSolved ? '#10b981' : '#6366f1';
                ctx.fill();
                ctx.fillStyle = '#fff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '12px Inter';
                ctx.fillText(node.id, node.x, node.y);
            });
        };

        render();
        checkSolution(); // Check constantly or on move
    }, [nodes, edges, isSolved]);

    // Event Handlers (Mouse/Touch)
    const handleMouseDown = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const node = nodes.find(n => Math.hypot(n.x - x, n.y - y) < NODE_RADIUS * 1.5);
        if (node) setDraggedNode(node.id);
    };

    const handleMouseMove = (e) => {
        if (draggedNode === null) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setNodes(nodes.map(n => n.id === draggedNode ? { ...n, x, y } : n));
    };

    const handleMouseUp = () => {
        setDraggedNode(null);
        checkSolution();
    };

    if (!isOpen) return null;

    return (
        <div className="game-overlay">
            <div className="game-window glass">
                <div className="game-header">
                    <h3>Dependency Resolver {isSolved && <span className="solved-badge">SOLVED!</span>}</h3>
                    <div className="controls">
                        <button onClick={() => generateLevel(level)} title="Reset Level"><RefreshCw size={18} /></button>
                        <button onClick={onClose}><X size={20} /></button>
                    </div>
                </div>

                <canvas
                    ref={canvasRef}
                    width={600}
                    height={400}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="game-canvas"
                />

                <div className="game-footer">
                    <p>Drag nodes to untangle the system dependencies. No crossing lines allowed.</p>
                    {isSolved && <button className="next-level-btn" onClick={() => setLevel(l => l + 1)}>Next System Lvl {level + 1} &rarr;</button>}
                </div>
            </div>
            <style jsx>{`
        .game-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
        }
        .game-window {
            background: #000;
            border: 1px solid var(--accent-color);
            border-radius: 12px;
            padding: 1rem;
            max-width: 650px;
            width: 100%;
        }
        .game-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }
        .game-canvas {
            background: #020617;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
        }
        .controls {
            display: flex;
            gap: 1rem;
        }
        .controls button {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
        }
        .controls button:hover { color: var(--text-primary); }
        .solved-badge {
            margin-left: 1rem;
            color: #10b981;
            font-size: 0.8rem;
            border: 1px solid #10b981;
            padding: 2px 8px;
            border-radius: 4px;
        }
        .game-footer {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        .next-level-btn {
            background: var(--accent-color);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
        }
      `}</style>
        </div>
    );
}
