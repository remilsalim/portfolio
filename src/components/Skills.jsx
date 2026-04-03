import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">TECHNICAL <span className="text-gradient">CAPABILITIES</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card glass-card"
            >
              <div className="skill-header">
                <category.icon className="skill-icon" size={28} />
                <h3>{category.title}</h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .skills-section {
          background-color: var(--bg-primary);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .skill-card {
          padding: 2.5rem;
          height: 100%;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.4s ease;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-purple);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 15px 40px -15px rgba(168, 85, 247, 0.15);
        }
        .skill-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 2rem;
        }
        .skill-icon {
          color: var(--accent-teal);
        }
        .skill-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .skill-list {
          list-style: none;
        }
        .skill-list li {
          margin-bottom: 1rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .skill-list li:hover {
          color: var(--text-primary);
        }
        .skill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-purple);
        }

        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
