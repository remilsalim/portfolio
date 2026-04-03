import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Brain, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle badge"
          >
            Frontend Dev | ML Engineer | Data Analyst
          </motion.span>
          
           <h1 className="hero-title">
             REMIL <span className="text-gradient name-hover">SALIM KP</span>
           </h1>
 
           <style jsx="true">{`
             .name-hover:hover {
               animation: colorGlow 8s ease-in-out infinite;
               background: none;
               -webkit-text-fill-color: initial;
               cursor: pointer;
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
           `}</style>
 
           <p className="hero-tagline">
            Crafting <span className="text-highlight">bespoke frontend designs</span>, 
            building <span className="text-highlight">ML systems</span>, 
            and extracting <span className="text-highlight">actionable insights</span> through data analysis.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <div className="hero-links">
              <a href="https://github.com/remilsalim" className="hero-icon-link" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/remil-salim-k-p/" className="hero-icon-link" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hero-visual"
        >
          <motion.div 
            drag
            dragSnapToOrigin={true}
            dragElastic={0.6}
            whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
            className="visual-circle glass-effect animate-float"
          >
            <div className="icon-wrapper"><Brain size={40} className="icon-purple" /></div>
          </motion.div>
          <motion.div 
            drag
            dragSnapToOrigin={true}
            dragElastic={0.6}
            whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
            className="visual-circle glass-effect animate-float-delayed"
          >
            <div className="icon-wrapper"><Database size={32} className="icon-teal" /></div>
          </motion.div>
          <motion.div 
            drag
            dragSnapToOrigin={true}
            dragElastic={0.6}
            whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
            className="visual-circle glass-effect animate-float-fast"
          >
            <div className="icon-wrapper"><Cpu size={36} className="icon-blue" /></div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        .hero-bg-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .hero-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          filter: grayscale(0.5) contrast(1.2);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(5, 5, 5, 0.4) 0%, rgba(5, 5, 5, 1) 90%);
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 60px;
        }
        .hero-title {
          font-size: 5rem;
          font-weight: 800;
          line-height: 1.1;
          margin: 1.5rem 0;
          letter-spacing: -0.04em;
        }
        .hero-subtitle {
          font-family: var(--font-body);
          padding: 6px 16px;
          border-color: var(--accent-teal);
          color: var(--accent-teal);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero-tagline {
          font-size: 1.5rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .text-highlight {
          color: var(--text-primary);
          font-weight: 600;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .hero-links {
          display: flex;
          gap: 20px;
        }
        .hero-icon-link {
          color: var(--text-secondary);
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .hero-icon-link:hover {
          color: var(--text-primary);
          transform: translateY(-4px);
        }
        
        .hero-visual {
          position: relative;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .visual-circle {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
          cursor: grab;
          touch-action: none;
        }
        .visual-circle:nth-child(1) {
          width: 180px;
          height: 180px;
          z-index: 2;
        }
        .visual-circle:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 40px;
          left: 40px;
        }
        .visual-circle:nth-child(3) {
          width: 140px;
          height: 140px;
          bottom: 40px;
          right: 40px;
        }
        .icon-wrapper { filter: drop-shadow(0 0 10px rgba(255,255,255,0.2)); }
        .icon-purple { color: var(--accent-purple); }
        .icon-teal { color: var(--accent-teal); }
        .icon-blue { color: var(--accent-blue); }

        .animate-float-delayed { animation: float 7s ease-in-out 1s infinite alternate; }
        .animate-float-fast { animation: float 5s ease-in-out infinite alternate; }

        @media (max-width: 1024px) {
          .hero-title { font-size: 3.5rem; }
          .hero-tagline { font-size: 1.25rem; }
        }
        @media (max-width: 768px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-actions { justify-content: center; }
          .hero-title { font-size: 3rem; }
          .hero-visual { height: 300px; margin-top: 40px; }
          .hero-tagline { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
