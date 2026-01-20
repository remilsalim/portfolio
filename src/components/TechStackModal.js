import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { X, Globe, Cpu, Server, Briefcase, GraduationCap, FileText } from 'lucide-react';

const domainData = {
  web: [
    { name: 'React / Next.js', value: 30, color: '#61dafb' },
    { name: 'Node.js / Express', value: 25, color: '#68a063' },
    { name: 'Flask / REST', value: 20, color: '#000000' },
    { name: 'Material UI / CSS', value: 25, color: '#0081cb' },
  ],
  ml: [
    { name: 'Python / Pandas', value: 40, color: '#3776ab' },
    { name: 'Scikit / XGBoost', value: 25, color: '#f37626' },
    { name: 'Deep Learning', value: 20, color: '#ff6f00' },
    { name: 'Bioinformatics', value: 15, color: '#228b22' },
  ],
  systems: [
    { name: 'Python Systems', value: 35, color: '#3776ab' },
    { name: 'SQL / MySQL', value: 25, color: '#00758f' },
    { name: 'Git / DevOps', value: 20, color: '#f05032' },
    { name: 'Networking', value: 20, color: '#444444' },
  ]
};

const experienceData = [
  {
    role: "IT & Web Systems Support",
    company: "Care Palliative Center",
    period: "June 2025 – Present",
    desc: "Supported operations, resolved web app issues, and maintained data integrity.",
    type: "work"
  },
  {
    role: "M.Tech, CSE",
    company: "GEC Thrissur",
    period: "2024 – 2026",
    desc: "Specializing in AI/ML. SGPA: 8.36",
    type: "edu"
  },
  {
    role: "Project Intern (YIP)",
    company: "K-DISC",
    period: "Oct 2025 – Present",
    desc: "Coordinating innovation initiatives and student engagement.",
    type: "work"
  },
  {
    role: "Front-End Intern",
    company: "Kerala Police Academy",
    period: "May 2025 – June 2025",
    desc: "Translated designs into responsive UI components.",
    type: "work"
  },
  {
    role: "B.Tech, CSE",
    company: "Royal College of Eng.",
    period: "2020 – 2024",
    desc: "CGPA: 8.03",
    type: "edu"
  }
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <text x={mx + (cos >= 0 ? 1 : -1) * 12} y={my} dy={4} textAnchor={textAnchor} fill="#e5e5e5" fontSize="11px" fontWeight="500">
      {name}
    </text>
  );
};

export default function TechStackModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('web');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="modal-content glass"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <h2>Technical Arsenal</h2>
              <p className="subtitle">Tools & Journey</p>

              <div className="tabs">
                <button className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`} onClick={() => setActiveTab('web')}>
                  <Globe size={16} /> Web
                </button>
                <button className={`tab-btn ${activeTab === 'ml' ? 'active' : ''}`} onClick={() => setActiveTab('ml')}>
                  <Cpu size={16} /> AI/ML
                </button>
                <button className={`tab-btn ${activeTab === 'systems' ? 'active' : ''}`} onClick={() => setActiveTab('systems')}>
                  <Server size={16} /> Sys
                </button>
                <button className={`tab-btn ${activeTab === 'journey' ? 'active' : ''}`} onClick={() => setActiveTab('journey')}>
                  <Briefcase size={16} /> Journey
                </button>
              </div>
            </div>

            <div className="content-container">
              {activeTab === 'journey' ? (
                <div className="journey-list">
                  <div className="download-row">
                    <a href="/REMIL_SALIM_AI_Engineer.pdf" download className="resume-btn-large">
                      <FileText size={16} /> Download Full Resume
                    </a>
                  </div>
                  {experienceData.map((item, index) => (
                    <motion.div
                      className="journey-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={index}
                    >
                      <div className="journey-icon">
                        {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                      </div>
                      <div className="journey-details">
                        <h4>{item.role}</h4>
                        <div className="journey-meta">
                          <span>{item.company}</span>
                          <span className="dot">•</span>
                          <span>{item.period}</span>
                        </div>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={domainData[activeTab]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={renderCustomizedLabel}
                      labelLine={true}
                      stroke="none"
                    >
                      {domainData[activeTab].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value, name) => [`${value}%`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1rem;
        }

        .modal-content {
          width: 100%;
          max-width: 600px;
          background: #0a0a0a;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          min-height: 550px;
          display: flex;
          flex-direction: column;
        }

        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: var(--text-secondary);
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          z-index: 10;
        }

        .close-btn:hover {
          color: var(--text-primary);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #fff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .subtitle {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
        }

        .tabs {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .tab-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            background: transparent;
            border: 1px solid transparent;
            transition: all 0.2s;
            cursor: pointer;
        }

        .tab-btn:hover {
            color: var(--text-primary);
            background: rgba(255,255,255,0.05);
        }

        .tab-btn.active {
            color: #000;
            background: #fff;
            font-weight: 600;
        }

        .content-container {
          height: 350px;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .journey-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow-y: auto;
            padding-right: 0.5rem;
            height: 100%;
        }
        
        .journey-list::-webkit-scrollbar {
          width: 4px;
        }
        
        .journey-list::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .journey-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .journey-item {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .journey-icon {
            color: var(--text-secondary);
            margin-top: 0.2rem;
        }
        
        .journey-details h4 {
            font-size: 1rem;
            color: var(--text-primary);
            margin-bottom: 0.3rem;
        }
        
        .journey-meta {
            display: flex;
            gap: 0.5rem;
            font-size: 0.85rem;
            color: var(--text-tertiary);
            margin-bottom: 0.5rem;
        }
        
        .journey-details p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.4;
        }
        
        .download-row {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 0.5rem;
        }
        
        .resume-summary {
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text-secondary);
            background: rgba(255, 255, 255, 0.03);
            padding: 1rem;
            border-radius: 8px;
            border-left: 3px solid var(--text-primary);
            margin-bottom: 1rem;
        }

        .resume-btn-large {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-primary);
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            transition: background 0.2s;
        }
        
        .resume-btn-large:hover {
            background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </AnimatePresence>
  );
}
