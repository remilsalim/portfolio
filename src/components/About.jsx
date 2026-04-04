import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h2 className="section-title text-left">ABOUT <span className="text-gradient">ME</span></h2>
            <p className="about-text">
              I am a versatile <span className="text-highlight">Developer & Analyst</span> with a deep passion for creating seamless user experiences and extracting value from complex data.
            </p>
            <p className="about-text">
              My expertise spans across <span className="text-highlight">Frontend Design & Development</span>, <span className="text-highlight">Machine Learning Engineering</span>, and <span className="text-highlight">Data Analysis</span>. I thrive on building end-to-end solutions from sleek, responsive interfaces to intelligent predictive systems ensuring every technical decision serves the user and the data.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"><Target size={24} /></div>
                <div className="highlight-text">
                  <h4>Results-Oriented</h4>
                  <p>Focused on deploying models that deliver measurable value.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><Settings size={24} /></div>
                <div className="highlight-text">
                  <h4>System Design</h4>
                  <p>Thinking beyond the algorithm to data flow and scalability.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-image-container"
          >
            <div className="about-image-overlay"></div>
            <div className="about-card glass-card fade-in">
              <h3>Professional Summary</h3>
              <ul className="summary-list">
                <li><span className="bullet"></span> Modern Frontend Development (React/Vite)</li>
                <li><span className="bullet"></span> Data Visualization & Analytics</li>
                <li><span className="bullet"></span> Machine Learning & Prediction Systems</li>
                <li><span className="bullet"></span> UI/UX Design & Prototyping</li>
              </ul>
              <div className="summary-footer">
                <Code2 size={40} className="icon-teal opacity-05" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .about-section {
          background-color: var(--bg-secondary);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 80px;
          align-items: center;
        }
        .text-left {
          text-align: left;
          margin-bottom: 2rem;
        }
        .about-text {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .about-highlights {
          margin-top: 3rem;
          display: grid;
          gap: 24px;
        }
        .highlight-item {
          display: flex;
          gap: 20px;
          padding: 20px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .highlight-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--accent-teal);
          transform: translateX(10px);
          animation: borderGlow 8s ease-in-out infinite;
          box-shadow: 0 10px 30px -10px rgba(45, 212, 191, 0.15);
        }
        .highlight-item:hover .highlight-icon {
          animation: colorGlow 8s ease-in-out infinite;
        }
        .highlight-icon {
          color: var(--accent-teal);
          transition: all 0.3s ease;
        }
        .highlight-text h4 {
          font-size: 1.1rem;
          margin-bottom: 4px;
          transition: all 0.3s ease;
        }
        .highlight-item:hover .highlight-text h4 {
          animation: colorGlow 8s ease-in-out infinite;
        }
        .highlight-text p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .about-image-container {
          position: relative;
        }
        .about-card {
          position: relative;
          z-index: 2;
          height: 100%;
          border-left: 4px solid var(--accent-purple);
        }
        .about-card h3 {
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }
        .summary-list {
          list-style: none;
        }
        .summary-list li {
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-primary);
          font-weight: 500;
        }
        .bullet {
          width: 8px;
          height: 8px;
          background: var(--accent-teal);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-teal);
        }
        .summary-footer {
          margin-top: 3rem;
          display: flex;
          justify-content: flex-end;
        }
        .opacity-05 { opacity: 0.3; }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-card { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default About;
