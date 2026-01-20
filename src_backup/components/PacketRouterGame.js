import { useState, useEffect } from 'react';
import { X, RefreshCw, Zap } from 'lucide-react';

export default function PacketRouterGame({ isOpen, onClose }) {
    const [level, setLevel] = useState(1);
    const [grid, setGrid] = useState([]);
    const [isSolved, setIsSolved] = useState(false);
    const GRID_SIZE = 5;

    // Simple levels: Star (S), End (E), Block (B), Empty (0)
    // We'll use a 1D array for simplicity
    const LEVELS = {
        1: [
            'S', 0, 0, 0, 0,
            0, 0, 'B', 0, 0,
            0, 'B', 0, 'B', 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 'E'
        ],
        2: [
            'S', 0, 'B', 0, 'E',
            0, 0, 'B', 0, 0,
            0, 0, 0, 'B', 0,
            0, 'B', 0, 0, 0,
            0, 0, 0, 0, 0
        ]
    };

    // User path is stored as indices
    const [path, setPath] = useState([]);

    useEffect(() => {
        if (isOpen) {
            resetLevel();
        }
    }, [isOpen, level]);

    const resetLevel = () => {
        setGrid(LEVELS[level] || LEVELS[1]);
        setPath([]);
        setIsSolved(false);
    };

    const handeCellClick = (index) => {
        if (isSolved) return;
        const cellType = grid[index];

        // If it's a block, ignore
        if (cellType === 'B') return;

        // Logic: 
        // 1. If path empty, must start at S
        // 2. If path started, click must be adjacent to last
        // 3. If click on E, and adjacent, Win.

        if (path.length === 0) {
            if (cellType === 'S') setPath([index]);
            return;
        }

        const last = path[path.length - 1];

        // Check adjacency (up, down, left, right)
        const row = Math.floor(index / GRID_SIZE);
        const col = index % GRID_SIZE;
        const lastRow = Math.floor(last / GRID_SIZE);
        const lastCol = last % GRID_SIZE;

        const isAdjacent = Math.abs(row - lastRow) + Math.abs(col - lastCol) === 1;

        if (isAdjacent) {
            // If clicking back on previous, backtrack
            if (path.length > 1 && index === path[path.length - 2]) {
                setPath(path.slice(0, -1));
                return;
            }

            // If clicking on 'E', Win
            if (cellType === 'E') {
                setPath([...path, index]);
                setIsSolved(true);
                return;
            }

            // If already in path, ignore (no crossing self)
            if (path.includes(index)) return;

            // Add to path
            setPath([...path, index]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="game-overlay">
            <div className="game-window glass">
                <div className="game-header">
                    <h3>Packet Router {isSolved && <span className="solved-badge">CONNECTED!</span>}</h3>
                    <div className="controls">
                        <button onClick={resetLevel} title="Reset"><RefreshCw size={18} /></button>
                        <button onClick={onClose}><X size={20} /></button>
                    </div>
                </div>

                <div className="grid-container">
                    {grid.map((cell, i) => {
                        let cellClass = 'cell';
                        if (cell === 'S') cellClass += ' start';
                        if (cell === 'E') cellClass += ' end';
                        if (cell === 'B') cellClass += ' block';
                        if (path.includes(i)) cellClass += ' path';

                        return (
                            <div key={i} className={cellClass} onClick={() => handeCellClick(i)}>
                                {cell === 'S' && <Zap size={16} fill="white" />}
                                {cell === 'E' && <div className="server-dot" />}
                            </div>
                        );
                    })}
                </div>

                <div className="game-footer">
                    <p>Route the packet from Start (<Zap size={10} />) to End (●). Click adjacent cells.</p>
                </div>
            </div>

            <style jsx>{`
        /* Reuse styles from UntangleGame where possible or duplicate for isolation */
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
            padding: 2rem;
            max-width: 400px;
            width: 100%;
        }
        .game-header {
             display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            color: var(--text-primary);
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
            margin-bottom: 1rem;
        }
        .cell {
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }
        .cell:hover { background: rgba(255,255,255,0.1); }
        .cell.start { background: #6366f1; box-shadow: 0 0 10px #6366f1; }
        .cell.end { border: 2px solid #6366f1; }
        .cell.block { background: #333; cursor: not-allowed; opacity: 0.5; }
        .cell.path { background: rgba(99, 102, 241, 0.5); }
        
        .server-dot { width: 12px; height: 12px; background: #6366f1; border-radius: 50%; }
        
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
            color: var(--text-secondary);
            font-size: 0.8rem;
            text-align: center;
        }
      `}</style>
        </div>
    );
}
