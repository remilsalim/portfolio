import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Machine Learning Engineering",
      subtitle: "Independent Research & Development",
      description: "Developing end-to-end ML systems, including FaceTheBeat and DruGNN. Focused on productionalizing models and complex data pipelines.",
      icon: TrendingUp,
      color: "var(--accent-teal)"
    },
    {
      year: "2023",
      title: "ML Project Lead: DruGNN",
      subtitle: "Graph Neural Networks Explorer",
      description: "Led the development of a graph-based data pipeline for analyzing drug-gene-side effect relationships, implementing GNN architectural principles.",
      icon: Briefcase,
      color: "var(--accent-purple)"
    },
    {
      year: "2022 - 2023",
      title: "AI/ML Specialization",
      subtitle: "Core Curriculum & Internships",
      description: "Studied foundational algorithms, data preprocessing techniques, and model optimization strategies. Completed forensic voice matching and medical data analysis projects.",
      icon: GraduationCap,
      color: "var(--accent-blue)"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">LEARNING <span className="text-gradient">JOURNEY</span></h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot" style={{ backgroundColor: exp.color }}>
                <exp.icon size={18} color="#000" />
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-year" style={{ color: exp.color }}>{exp.year}</span>
                <h3>{exp.title}</h3>
                <span className="timeline-subtitle">{exp.subtitle}</span>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>

      <style jsx="true">{`
        .experience-section {
          background-color: var(--bg-primary);
          padding-bottom: 120px;
        }
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 60px auto 0;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-teal), var(--accent-purple), transparent);
          transform: translateX(-50%);
        }
        .timeline-item {
          width: 45%;
          position: relative;
          margin-bottom: 60px;
        }
        .timeline-item.left { text-align: right; margin-right: auto; }
        .timeline-item.right { text-align: left; margin-left: auto; }

        .timeline-dot {
          position: absolute;
          top: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        }
        .timeline-item.left .timeline-dot { right: -60px; }
        .timeline-item.right .timeline-dot { left: -60px; }

        .timeline-content {
          padding: 2rem;
          background: var(--card-bg);
          border: 1px solid var(--glass-border);
          transition: all 0.3s ease;
        }
        .timeline-content:hover {
          border-color: var(--accent-teal);
          transform: scale(1.02);
        }
        .timeline-year {
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 10px;
          display: block;
        }
        .timeline-content h3 {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }
        .timeline-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 20px;
          display: block;
        }
        .timeline-content p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-line { left: 40px; }
          .timeline-item { width: 85%; margin-left: 80px !important; text-align: left !important; }
          .timeline-dot { left: -60px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
