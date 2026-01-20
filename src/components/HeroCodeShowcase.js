import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, FileCode, Cpu, Database, Layers } from 'lucide-react';

const files = [
    {
        name: 'system_core.rs',
        language: 'rust',
        icon: <Cpu size={14} className="text-orange-400" />,
        code: `pub struct DecisionEngine {
    weights: HashMap<String, f64>,
    constraints: Vec<Constraint>,
}

impl DecisionEngine {
    pub fn optimize(&self, input: Input) -> Result<Solution> {
        // Quantify architectural trade-offs
        let score = self.calculate_score(&input);
        
        if score > THRESHOLD {
            Ok(Solution::optimal(input))
        } else {
            Err(Error::SuboptimalTradeoff)
        }
    }
}`
    },
    {
        name: 'graph_algo.py',
        language: 'python',
        icon: <Database size={14} className="text-blue-400" />,
        code: `class DependencyGraph:
    def resolve(self, nodes):
        """
        Topological sort with cycle detection
        for package resolution.
        """
        visited = set()
        stack = []

        def dfs(node):
            if node in visited:
                return
            visited.add(node)
            for dep in node.dependencies:
                dfs(dep)
            stack.append(node)

        return stack[::-1]`
    },
    {
        name: 'inference.ts',
        language: 'typescript',
        icon: <Layers size={14} className="text-yellow-400" />,
        code: `interface InferenceConfig {
  backend: 'webgl' | 'wasm';
  precision: 'f16' | 'f32';
}

export async function runInference(
  input: Tensor, 
  config: InferenceConfig
): Promise<Prediction> {
  // Offload to worker thread
  const worker = new Worker('inference.worker.js');
  
  return new Promise((resolve) => {
    worker.postMessage({ input, config });
    worker.onmessage = (e) => resolve(e.data);
  });
}`
    }
];

const SyntaxHighlight = ({ code, language }) => {
    // Simple regex-based highlighting for visual effect
    // This is lightweight compared to a full tokenizer
    const tokens = code.split(/(\s+|[{}()[\],.;])/g);

    return (
        <pre className="font-mono text-[13px] leading-6">
            {tokens.map((token, i) => {
                let color = 'text-gray-300';

                if (/^(pub|struct|impl|fn|let|if|else|return|class|def|import|from|interface|export|async|const|new)/.test(token))
                    color = 'text-purple-400';
                else if (/^(String|f64|Vec|HashMap|Result|Solution|Error|Input|DependencyGraph|Tensor|Promise|Prediction|Worker)/.test(token))
                    color = 'text-yellow-300';
                else if (/^'.*'$/.test(token) || /^".*"$/.test(token))
                    color = 'text-green-300';
                else if (/^\d+$/.test(token))
                    color = 'text-orange-300';
                else if (/^\/\//.test(token) || token.trim().startsWith('//')) // Simple comment detection
                    return <span key={i} className="text-gray-500 italic">{token}</span>;

                return <span key={i} className={color}>{token}</span>;
            })}
        </pre>
    );
};

export default function HeroCodeShowcase() {
    const [activeFile, setActiveFile] = useState(files[0]);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(activeFile.code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="showcase-container"
        >
            <div className="window-frame glass">
                {/* Header / Title Bar */}
                <div className="window-header">
                    <div className="window-controls">
                        <div className="control red"></div>
                        <div className="control yellow"></div>
                        <div className="control green"></div>
                    </div>
                    <div className="window-title">
                        <Terminal size={12} className="text-gray-400 mr-2" />
                        <span className="text-xs text-gray-400 font-mono">remil-dev/portfolio</span>
                    </div>
                </div>

                <div className="window-body">
                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="sidebar-header">EXPLORER</div>
                        <div className="file-list">
                            {files.map((file) => (
                                <button
                                    key={file.name}
                                    onClick={() => setActiveFile(file)}
                                    className={`file-item ${activeFile.name === file.name ? 'active' : ''}`}
                                >
                                    {file.icon}
                                    <span>{file.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="editor-area">
                        <div className="editor-tabs">
                            <div className="tab active">
                                {activeFile.icon}
                                <span className="ml-2">{activeFile.name}</span>
                                <button
                                    onClick={handleCopy}
                                    className="copy-btn ml-auto"
                                    title="Copy Code"
                                >
                                    {isCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                </button>
                            </div>
                        </div>

                        <div className="code-content custom-scrollbar">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFile.name}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <SyntaxHighlight code={activeFile.code} language={activeFile.language} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .showcase-container {
          width: 100%;
          max-width: 650px;
          margin: 0 auto;
          perspective: 1000px;
        }

        .window-frame {
          background: rgba(13, 17, 23, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05); /* Inner stroke */
          display: flex;
          flex-direction: column;
          height: 380px;
          transform: rotateX(2deg) rotateY(-2deg); /* Subtle 3D tilt */
          transition: transform 0.4s ease;
        }

        .showcase-container:hover .window-frame {
          transform: rotateX(0) rotateY(0);
        }

        .window-header {
          display: flex;
          align-items: center;
          padding: 0 1rem;
          height: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
        }

        .window-controls {
          display: flex;
          gap: 8px;
          margin-right: 16px;
        }

        .control {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .window-title {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: 40px; /* Balance controls */
        }

        .window-body {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .sidebar {
          width: 160px;
          background: rgba(0, 0, 0, 0.2);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 12px 16px;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.05em;
        }

        .file-list {
          display: flex;
          flex-direction: column;
        }

        .file-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.2s;
          text-align: left;
          border-left: 2px solid transparent;
        }

        .file-item:hover {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.03);
        }

        .file-item.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
          border-left-color: var(--primary-color, #c084fc);
        }

        .editor-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: rgba(13, 17, 23, 0.5);
        }

        .editor-tabs {
          display: flex;
          height: 36px;
          background: rgba(0, 0, 0, 0.3);
        }

        .tab {
          display: flex;
          align-items: center;
          padding: 0 16px;
          background: rgba(13, 17, 23, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          border-top: 2px solid var(--primary-color, #c084fc);
          color: #fff;
          font-size: 0.85rem;
          min-width: 150px;
        }

        .copy-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .copy-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        .code-content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 640px) {
          .window-frame {
             height: 300px;
          }
          .sidebar {
            width: 50px; /* Collapse sidebar on mobile */
          }
          .sidebar-header, .file-item span {
            display: none;
          }
          .file-item {
            justify-content: center;
            padding: 12px 0;
          }
        }
      `}</style>
        </motion.div>
    );
}
