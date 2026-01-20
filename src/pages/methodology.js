import Layout from '@/components/Layout';
import { GitCommit, RefreshCw, Terminal, Cpu } from 'lucide-react';

export default function Methodology() {
    return (
        <Layout title="Methodology | Remil Salim">
            <section className="section">
                <h1>How I Work</h1>
                <p className="intro">
                    Engineering is not just about typing code. It's about maintaining a mental model of a complex system
                    and iteratively refining it. Here is how I approach problems.
                </p>
            </section>

            <section className="section">
                <h2 className="subtitle">The Core Loop</h2>
                <div className="process-grid">
                    <div className="process-item">
                        <div className="icon"><Terminal size={24} /></div>
                        <h3>1. Prototype & Probe</h3>
                        <p>
                            I don't start with perfect architecture. I start by probing the domain.
                            I write throwaway scripts to understand the APIs, data shapes, and edge cases.
                        </p>
                    </div>
                    <div className="process-item">
                        <div className="icon"><Cpu size={24} /></div>
                        <h3>2. System Design</h3>
                        <p>
                            Once the constraints are known, I design the data flow.
                            State management is usually the source of all bugs, so I define the state machine first.
                        </p>
                    </div>
                    <div className="process-item">
                        <div className="icon"><GitCommit size={24} /></div>
                        <h3>3. Atomic Commits</h3>
                        <p>
                            I commit often. Every logical change gets a commit.
                            This allows me to `git bisect` easily if I break something.
                        </p>
                    </div>
                    <div className="process-item">
                        <div className="icon"><RefreshCw size={24} /></div>
                        <h3>4. Refactor Aggressively</h3>
                        <p>
                            Code is a liability. I delete code whenever possible.
                            If a function is hard to test, it's refactored immediately, not "later".
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2 className="subtitle">Toolbox</h2>
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>Languages</h3>
                        <ul>
                            <li><strong>JavaScript/TypeScript</strong>: My default for web systems.</li>
                            <li><strong>Python</strong>: For data analysis, ML, and scripting.</li>
                            <li><strong>HTML/CSS</strong>: I believe in semantic HTML and CSS that doesn't fight the browser.</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Systems</h3>
                        <ul>
                            <li><strong>React/Next.js</strong>: Component-driven UI architecture.</li>
                            <li><strong>Git</strong>: Not just `commit`, but `rebase`, `cherry-pick`, and interactive staging.</li>
                            <li><strong>Linux</strong>: I am comfortable in the shell. grep/sed/awk are daily drivers.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .intro {
          font-size: 1.2rem;
          max-width: 700px;
        }

        .subtitle {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-tertiary);
            margin-bottom: 3rem;
        }

        .process-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            border-left: 1px solid var(--border-color);
            padding-left: 2rem;
        }

        .process-item {
            position: relative;
        }

        .process-item::before {
            content: '';
            position: absolute;
            left: -2.35rem; /* Align with border center */
            top: 0.5rem;
            width: 0.6rem;
            height: 0.6rem;
            background: var(--bg-primary);
            border: 1px solid var(--text-tertiary);
            border-radius: 50%;
        }

        .icon {
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .process-item h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }

        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 4rem;
        }

        .skill-category h3 {
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .skill-category ul {
            list-style: none;
            padding: 0;
        }

        .skill-category li {
            margin-bottom: 1rem;
            color: var(--text-secondary);
        }

        .skill-category strong {
            color: var(--text-primary);
        }

        @media (min-width: 600px) {
            .process-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
      `}</style>
        </Layout>
    );
}
