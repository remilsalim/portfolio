import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Palette, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('neon');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.className = `theme-${theme}`;
  }, [theme]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-effect' : ''}`}>
      <div className="container nav-content">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nav-logo"
        >
          <a href="#" className="logo-text">RS<span>.</span></a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="nav-socials">
            <a href="https://github.com/remilsalim" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/remil-salim-k-p/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
            
            <div className="theme-switcher">
              <button 
                className="theme-capsule" 
                onClick={() => setTheme(theme === 'neon' ? 'pastel' : 'neon')}
                title={`Switch to ${theme === 'neon' ? 'Pastel' : 'Neon'} mode`}
              >
                <Palette size={14} />
                <span>{theme === 'neon' ? 'Neon' : 'Pastel'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="nav-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-mobile-menu glass-effect"
          >
            <ul className="mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
                </li>
              ))}
            </ul>
            <div className="mobile-socials">
              <a href="https://github.com/remilsalim" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/remil-salim-k-p/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          height: 70px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo-text {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
        }
        .logo-text span {
          color: var(--accent-teal);
          display: inline-block;
          transition: all 0.3s ease;
        }
        .logo-text:hover span {
          animation: colorGlow 8s ease-in-out infinite;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-links a:hover {
          animation: colorGlow 8s ease-in-out infinite;
        }
        @keyframes colorGlow {
          0% { color: var(--accent-teal); }
          16% { color: var(--accent-purple); }
          33% { color: var(--accent-blue); }
          50% { color: var(--accent-pink); }
          66% { color: var(--accent-green); }
          83% { color: var(--accent-orange); }
          100% { color: var(--accent-teal); }
        }
        .nav-socials {
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--text-secondary);
        }
        .theme-switcher {
          display: flex;
          align-items: center;
          transform: translateX(70px);
        }
        .theme-capsule {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          color: var(--text-secondary);
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
          text-transform: capitalize;
        }
        .theme-capsule:hover {
          color: var(--text-primary);
          border-color: var(--accent-teal);
          background: var(--glass-border);
          transform: translateY(-2px);
        }
        .theme-capsule span {
          min-width: 45px;
          text-align: left;
        }
        .nav-socials a:hover {
          color: var(--text-primary);
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .nav-mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .mobile-links {
          list-style: none;
          text-align: center;
        }
        .mobile-links li {
          margin-bottom: 24px;
        }
        .mobile-links a {
          font-size: 1.2rem;
          font-weight: 600;
        }
        .mobile-socials {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-top: 24px;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
