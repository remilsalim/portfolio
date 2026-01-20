import { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Terminal({ isOpen, onClose, launchGame }) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'Systems OS [Version 1.0.0]' },
        { type: 'system', content: '(c) 2026 Remil Salim. All rights reserved.' },
        { type: 'info', content: 'Type "help" to see available commands.' },
    ]);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'user', content: cmd }];

        switch (cleanCmd) {
            case 'help':
                newHistory.push({
                    type: 'response',
                    content: `Available commands:
  help           - Show this message
  whoami         - Display current user info
  clear          - Clear terminal
  play untangle  - Launch Dependency Resolver game
  play flow      - Launch Packet Router game
  exit           - Close terminal`
                });
                break;
            case 'whoami':
                newHistory.push({ type: 'response', content: 'Guest User @ Portfolio-V3' });
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case 'exit':
                onClose();
                break;
            case 'play untangle':
                newHistory.push({ type: 'success', content: 'Launching Dependency Resolver...' });
                setHistory(newHistory);
                setTimeout(() => launchGame('untangle'), 800);
                break;
            case 'play flow':
                newHistory.push({ type: 'success', content: 'Launching Packet Router...' });
                setHistory(newHistory);
                setTimeout(() => launchGame('flow'), 800);
                break;
            default:
                newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
        }

        setHistory(newHistory);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
        if (e.key === 'l' && e.ctrlKey) {
            e.preventDefault();
            setHistory([]);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="terminal-overlay"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                <div className="terminal-window glass">
                    <div className="terminal-header">
                        <div className="terminal-title">
                            <TerminalIcon size={14} />
                            <span>remil@system: ~</span>
                        </div>
                        <button onClick={onClose} className="close-btn"><X size={16} /></button>
                    </div>

                    <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
                        {history.map((line, i) => (
                            <div key={i} className={`line ${line.type}`}>
                                {line.type === 'user' && <span className="prompt">➜ ~</span>}
                                <span className="content">{line.content}</span>
                            </div>
                        ))}
                        <div className="input-line">
                            <span className="prompt">➜ ~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="cmd-input"
                                autoFocus
                            />
                        </div>
                        <div ref={bottomRef} />
                    </div>
                </div>

                <style jsx>{`
          .terminal-overlay {
            position: fixed;
            top: 5rem; /* Below header */
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 800px;
            z-index: 50;
            display: flex;
            justify-content: center;
          }

          .terminal-window {
            width: 100%;
            height: 500px;
            background: rgba(10, 10, 10, 0.95);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            font-family: var(--font-mono);
          }

          .terminal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 1rem;
            background: rgba(255,255,255,0.05);
            border-bottom: 1px solid var(--border-color);
          }

          .terminal-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
          }

          .close-btn {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            transition: color 0.2s;
          }
          .close-btn:hover { color: var(--text-primary); }

          .terminal-body {
            flex: 1;
            padding: 1rem;
            overflow-y: auto;
            color: #d4d4d4;
            font-size: 0.95rem;
          }

          .line { margin-bottom: 0.4rem; line-height: 1.5; white-space: pre-wrap; }
          .line.user { color: #f8f8f2; margin-top: 1rem; }
          .line.system { color: #6272a4; }
          .line.response { color: #d4d4d4; }
          .line.success { color: #50fa7b; }
          .line.error { color: #ff5555; }
          .line.info { color: #8be9fd; }

          .input-line {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.5rem;
          }

          .prompt {
            color: #ff79c6;
            font-weight: bold;
          }

          .cmd-input {
            background: none;
            border: none;
            color: #f8f8f2;
            font-family: var(--font-mono);
            font-size: 0.95rem;
            flex: 1;
            outline: none;
          }
        `}</style>
            </motion.div>
        </AnimatePresence>
    );
}
