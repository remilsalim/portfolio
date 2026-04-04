import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Database, Brain, Cpu, MessageSquare, Play, Info } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">FEATURED <span className="text-gradient">WORK</span></h2>
          <p className="section-intro">
            Bridging the gap between intelligent Machine Learning systems, modern Frontend architecture, and user-centric Product Development.
          </p>
          
          <div className="filter-container">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
              onClick={() => setActiveFilter('research')}
            >
              Research Oriented
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'hobby' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hobby')}
            >
              Hobby Projects
            </button>
          </div>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="project-card glass-card"
              >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-category-badge">{project.category}</div>
                <div className="project-image-overlay">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary demo-btn">
                      <Play size={16} fill="currentColor" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline github-btn">
                      <FaGithub size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4 className="feature-title"><Info size={14} /> Key Features</h4>
                  <ul className="feature-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx="true">{`
        .projects-section {
          background-color: var(--bg-secondary);
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-intro {
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 2.5rem;
          font-size: 1.1rem;
        }
        .filter-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 8px 24px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        .filter-btn:hover {
          background: var(--glass-border);
          color: var(--text-primary);
          border-color: var(--accent-teal);
          animation: borderGlow 8s ease-in-out infinite, colorGlow 8s ease-in-out infinite;
        }
        .filter-btn.active {
          background: var(--accent-teal);
          color: #000;
          border-color: var(--accent-teal);
          box-shadow: 0 0 20px rgba(45, 212, 191, 0.3);
        }
        .filter-btn.active:hover {
          animation: bgGlow 8s ease-in-out infinite;
          color: #000;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        .project-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--glass-border);
          background: var(--card-bg);
          transition: all 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          animation: borderGlow 8s ease-in-out infinite;
          box-shadow: 0 20px 40px -15px rgba(45, 212, 191, 0.2);
        }
        .project-card:hover .project-title {
          animation: colorGlow 8s ease-in-out infinite;
        }
        .project-card:hover .project-subtitle {
          animation: colorGlow 8s ease-in-out infinite;
        }
        .project-image-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          opacity: 0.8;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
          opacity: 0.4;
        }
        .project-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 6px 14px;
          background: var(--accent-teal);
          color: #000;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 5;
        }
        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        .project-card:hover .project-image-overlay {
          opacity: 1;
        }
        .project-info {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-header {
          margin-bottom: 0.75rem;
        }
        .project-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }
        .project-subtitle {
          font-size: 0.85rem;
          color: var(--accent-teal);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .project-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-top: 0.75rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .project-features {
          margin-bottom: 2rem;
        }
        .feature-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .feature-list {
          list-style: none;
          display: grid;
          gap: 8px;
        }
        .feature-list li {
          font-size: 0.9rem;
          color: var(--text-primary);
          padding-left: 20px;
          position: relative;
        }
        .feature-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-teal);
        }
        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }
        .tech-badge {
          background: var(--bg-accent);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-size: 0.75rem;
          padding: 4px 10px;
        }
        .project-card:hover .tech-badge {
          border-color: var(--accent-teal);
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: 1fr; max-width: 700px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
