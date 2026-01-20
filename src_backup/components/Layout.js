import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Added useEffect
import { Github, Twitter, Mail, ArrowUpRight } from 'lucide-react'; // Added TerminalIcon
import InteractiveBackground from './InteractiveBackground';
import TechStackModal from './TechStackModal';
import Terminal from './Terminal';
import UntangleGame from './UntangleGame';
import PacketRouterGame from './PacketRouterGame';

export default function Layout({ children, title = 'Remil Salim' }) {
  const [isStackOpen, setIsStackOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeGame, setActiveGame] = useState(null); // 'untangle', 'flow', or null

  // Hotkey listener for Terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const launchGame = (gameType) => {
    setIsTerminalOpen(false); // Close terminal when launching
    setActiveGame(gameType);
  };

  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Engineering Portfolio of Remil Salim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <InteractiveBackground />
      <TechStackModal isOpen={isStackOpen} onClose={() => setIsStackOpen(false)} />

      {/* Interactive Layers */}
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        launchGame={launchGame}
      />
      <UntangleGame
        isOpen={activeGame === 'untangle'}
        onClose={() => setActiveGame(null)}
      />
      <PacketRouterGame
        isOpen={activeGame === 'flow'}
        onClose={() => setActiveGame(null)}
      />

      <header className="header glass">
        <div className="container header-content">
          {/* Changed from Link to button for the interaction requested */}
          <button onClick={() => setIsStackOpen(true)} className="logo-btn">
            Remil Salim
          </button>

          <nav className="nav">

            <Link href="/methodology" className="nav-link">Methodology</Link>
            <Link href="https://github.com/remilsalim" target="_blank" className="nav-icon">
              <Github size={18} />
            </Link>
          </nav>
        </div>
      </header>

      <main className="main container">
        {children}
      </main>

      <footer className="footer container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Remil Salim. Built with Next.js.</p>
          <div className="socials">
            <a href="https://github.com/remilsalim" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo-btn {
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          background: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0;
        }
        
        .logo-btn:hover {
          opacity: 0.8;
        }

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          border: none;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-icon {
          color: var(--text-secondary);
          border: none;
          display: flex;
          align-items: center;
        }
        
        .nav-icon:hover {
          color: var(--text-primary);
        }

        .main {
          flex: 1;
          padding-top: 8rem; /* Account for fixed header */
          padding-bottom: 4rem;
        }

        .footer {
          padding-top: 3rem;
          padding-bottom: 3rem;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-tertiary);
        }

        .socials {
          display: flex;
          gap: 1.5rem;
        }
        
        .socials a {
          display: flex;
          align-items: center;
          gap: 4px;
          border: none;
          color: var(--text-secondary);
        }
        
        .socials a:hover {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
}
