import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text">RS<span>.</span></span>
            <p>Frontend Dev | ML Engineer | Data Analyst</p>
          </div>

          <div className="footer-nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <a href="https://github.com/remilsalim" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/remil-salim-k-p/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
            <a href="mailto:remilsalim369@gmail.com"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Remil Salim. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .footer-section {
          background-color: var(--bg-primary);
          padding: 60px 0 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 60px;
        }
        .footer-brand p {
          color: var(--text-secondary);
          margin-top: 10px;
          font-size: 0.9rem;
        }
        .footer-brand .logo-text { font-size: 1.5rem; font-weight: 800; }
        .footer-brand span span { color: var(--accent-teal); }

        .footer-nav ul {
          list-style: none;
          display: flex;
          gap: 32px;
        }
        .footer-nav a {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
        }
        .footer-nav a:hover {
          color: var(--text-primary);
        }

        .footer-social {
          display: flex;
          gap: 20px;
          color: var(--text-secondary);
        }
        .footer-social a:hover {
          color: var(--accent-teal);
          transform: translateY(-4px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .back-to-top {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-to-top:hover {
          background: var(--accent-teal);
          color: #000;
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .footer-top { flex-direction: column; align-items: center; text-align: center; gap: 40px; }
          .footer-nav ul { flex-direction: column; gap: 15px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
