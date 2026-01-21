"use client"

import { useState, useEffect, useRef } from 'react'
import { RefreshCw, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function UntangleGame() {
    const canvasRef = useRef(null)
    const [level, setLevel] = useState(1)
    const [isSolved, setIsSolved] = useState(false)
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])
    const [draggedNode, setDraggedNode] = useState(null)

    // Game Constants
    const NODE_RADIUS = 20
    const LEVEL_CONFIG = {
        1: { nodes: 6, edges: 8 },
        2: { nodes: 8, edges: 12 },
        3: { nodes: 10, edges: 15 },
        4: { nodes: 12, edges: 20 },
    }

    const generateLevel = (lvl) => {
        const config = LEVEL_CONFIG[lvl] || LEVEL_CONFIG[4]
        const newNodes = []
        // Fixed dimensions for the canvas container in the dialog
        const width = 450 // Approximate width within dialog
        const height = 300

        // Generate random nodes
        for (let i = 0; i < config.nodes; i++) {
            newNodes.push({
                id: i,
                x: Math.random() * (width - 60) + 30,
                y: Math.random() * (height - 60) + 30,
            })
        }

        // Generate edges (ensure connected graph)
        const newEdges = []
        for (let i = 0; i < config.edges; i++) {
            const source = Math.floor(Math.random() * config.nodes)
            let target = Math.floor(Math.random() * config.nodes)
            while (source === target) target = Math.floor(Math.random() * config.nodes)

            // Avoid duplicates
            if (!newEdges.find(e => (e.source === source && e.target === target) || (e.source === target && e.target === source))) {
                newEdges.push({ source, target })
            }
        }

        setNodes(newNodes)
        setEdges(newEdges)
        setIsSolved(false)
    }

    useEffect(() => {
        generateLevel(level)
    }, [level])

    // Intersection Logic
    const intersect = (p1, p2, p3, p4) => {
        const ccw = (a, b, c) => (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x)
        return ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4)
    }

    const checkSolution = () => {
        let crossings = 0
        for (let i = 0; i < edges.length; i++) {
            for (let j = i + 1; j < edges.length; j++) {
                const e1 = edges[i]
                const e2 = edges[j]

                if (e1.source === e2.source || e1.source === e2.target || e1.target === e2.source || e1.target === e2.target) continue

                const n1 = nodes[e1.source]
                const n2 = nodes[e1.target]
                const n3 = nodes[e2.source]
                const n4 = nodes[e2.target]

                if (intersect(n1, n2, n3, n4)) {
                    crossings++
                }
            }
        }
        if (crossings === 0 && edges.length > 0) setIsSolved(true)
    }

    // Canvas Drawing
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw Edges
            edges.forEach(edge => {
                const n1 = nodes[edge.source]
                const n2 = nodes[edge.target]

                ctx.beginPath()
                ctx.moveTo(n1.x, n1.y)
                ctx.lineTo(n2.x, n2.y)
                ctx.strokeStyle = '#334155' // slate-700
                ctx.lineWidth = 2
                ctx.stroke()
            })

            // Draw Nodes
            nodes.forEach(node => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2)
                ctx.fillStyle = isSolved ? '#10b981' : '#6366f1' // emerald-500 : indigo-500
                ctx.fill()
                // Node ID text
                ctx.fillStyle = '#fff'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.font = '12px sans-serif'
                ctx.fillText(node.id, node.x, node.y)
            })
        }

        render()
        if (nodes.length > 0) checkSolution()
    }, [nodes, edges, isSolved])

    // Event Handlers
    const getCanvasCoordinates = (e, canvas) => {
        const rect = canvas.getBoundingClientRect()
        const scaleX = canvas.width / rect.width
        const scaleY = canvas.height / rect.height
        const x = (e.clientX - rect.left) * scaleX
        const y = (e.clientY - rect.top) * scaleY
        return { x, y }
    }

    const handlePointerDown = (e) => {
        // e.target is the canvas
        const canvas = canvasRef.current
        const { x, y } = getCanvasCoordinates(e, canvas)

        // Capture pointer to ensure smooth dragging even if mouse leaves canvas
        e.target.setPointerCapture(e.pointerId)

        const node = nodes.find(n => Math.hypot(n.x - x, n.y - y) < NODE_RADIUS * 1.5)
        if (node) setDraggedNode(node.id)
    }

    const handlePointerMove = (e) => {
        if (draggedNode === null) return

        const canvas = canvasRef.current
        const { x, y } = getCanvasCoordinates(e, canvas)

        // Boundary checks (keeping nodes inside the canvas)
        const clampedX = Math.max(NODE_RADIUS, Math.min(x, 450 - NODE_RADIUS))
        const clampedY = Math.max(NODE_RADIUS, Math.min(y, 300 - NODE_RADIUS))

        setNodes(nodes.map(n => n.id === draggedNode ? { ...n, x: clampedX, y: clampedY } : n))
    }

    const handlePointerUp = (e) => {
        setDraggedNode(null)
        e.target.releasePointerCapture(e.pointerId)
        checkSolution()
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Level {level}</span>
                    {isSolved && (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-500 border border-emerald-500 px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3" /> SOLVED
                        </span>
                    )}
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => generateLevel(level)}
                    title="Reset Level"
                >
                    <RefreshCw className="w-4 h-4" />
                </Button>
            </div>

            <canvas
                ref={canvasRef}
                width={450}
                height={300}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp} // Safety fallback, though capture handles most cases
                className="w-full bg-slate-950 rounded-lg border border-slate-800 touch-none"
            />

            <div className="flex items-center justify-between text-xs text-muted-foreground min-h-[40px]">
                <p>Drag nodes to untangle lines.</p>
                {isSolved && (
                    <Button
                        size="sm"
                        onClick={() => setLevel(l => l + 1)}
                        className="animate-in fade-in slide-in-from-right-4"
                    >
                        Next Level <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                )}
            </div>
        </div>
    )
}
