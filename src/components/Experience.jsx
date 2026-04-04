import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, TrendingUp, Database } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: "Oct 2025 - Present",
      title: "Project Intern",
      subtitle: "K-DISC (Govt. of Kerala)",
      description: "Supporting the Young Innovators Programme (YIP) by mentoring student teams, providing technical support for innovation-driven projects, and coordinating district-level outreach activities.",
      icon: Award,
      color: "var(--accent-teal)"
    },
    {
      year: "May 2025 - Jun 2025",
      title: "Frontend Developer Intern",
      subtitle: "Kerala Police Cyberdome",
      description: "Architected and developed a web management system using React.js and Material UI. Designed intuitive UI/UX layouts in Figma and implemented responsive frontend architectures for law enforcement tools.",
      icon: Briefcase,
      color: "var(--accent-purple)"
    },
    {
      year: "Jul 2024 - Oct 2024",
      title: "Fullstack Developer Intern",
      subtitle: "QSpiders Global",
      description: "Engineered responsive web applications using HTML5, CSS3, and JavaScript. Integrated frontend components with Java-based backend services (Servlets/JSP) while mastering OOP principles.",
      icon: Database,
      color: "var(--accent-blue)"
    },
    {
      year: "Dec 2023 - Jul 2024",
      title: "Career Support Executive",
      subtitle: "Kerala Knowledge Economy Mission (Govt. of Kerala)",
      description: "Strategized employability enhancement initiatives, guiding seekers through resume optimization and skill mapping. Coordinated industry interviews and managed outreach for state-level career portals.",
      icon: TrendingUp,
      color: "var(--accent-pink)"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">PROFESSIONAL <span className="text-gradient">EXPERIENCE</span></h2>
        
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
          transition: all 0.3s ease;
        }
        .timeline-item.left .timeline-dot { right: -60px; }
        .timeline-item.right .timeline-dot { left: -60px; }

        .timeline-content {
          padding: 2.5rem;
          background: var(--card-bg);
          border: 1px solid var(--glass-border);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .timeline-content:hover {
          transform: scale(1.02);
          animation: borderGlow 8s ease-in-out infinite;
          box-shadow: 0 10px 30px -10px rgba(45, 212, 191, 0.2);
        }
        .timeline-content:hover h3 {
          animation: colorGlow 8s ease-in-out infinite;
        }
        .timeline-content:hover .timeline-year {
          animation: colorGlow 8s ease-in-out infinite;
        }
        .timeline-year {
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 10px;
          display: block;
          transition: all 0.3s ease;
        }
        .timeline-content h3 {
          font-size: 1.5rem;
          margin-bottom: 4px;
          transition: all 0.3s ease;
        }
        .timeline-subtitle {
          color: var(--accent-teal);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          display: block;
        }
        .timeline-content p {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 0.95rem;
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
