import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, BrainCircuit, Rocket, ArrowRight } from 'lucide-react';

const Workflow = () => {
  const steps = [
    { 
      icon: Database, 
      title: "Data Acquisition", 
      desc: "Raw data extraction from varied sources: (ETL, Ensembl, APIs)",
      color: "#3b82f6" 
    },
    { 
      icon: Filter, 
      title: "Preprocessing", 
      desc: "Cleaning, feature engineering, and normalization pipelines.",
      color: "#2dd4bf" 
    },
    { 
      icon: BrainCircuit, 
      title: "Model Development", 
      desc: "Experimentation (GNN, XGBoost, CV) and optimization.",
      color: "#a855f7" 
    },
    { 
      icon: Rocket, 
      title: "Deployment", 
      desc: "Continuous integration and model serving in real environments.",
      color: "#f43f5e" 
    }
  ];

  return (
    <section id="workflow" className="workflow-section">
      <div className="container">
        <h2 className="section-title">THE ML <span className="text-gradient">WORKFLOW</span></h2>
        <p className="section-intro">A systematic approach to building production-level AI systems.</p>
        
        <div className="workflow-diagram">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="workflow-node glass-card"
                style={{ borderTop: `4px solid ${step.color}` }}
              >
                <div className="node-icon" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                  <step.icon size={32} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="node-connector">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: (index * 0.2) + 0.3 }}
                    viewport={{ once: true }}
                    className="connector-line"
                  ></motion.div>
                  <ArrowRight size={20} className="connector-arrow" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .workflow-section {
          background-position: center;
          background-size: cover;
          position: relative;
        }
        .section-intro {
          text-align: center;
          max-width: 600px;
          margin: -2rem auto 4rem;
          color: var(--text-secondary);
        }
        .workflow-diagram {
          grid-template-columns: repeat(4, 1fr);
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 60px 0;
          overflow-x: auto;
        }
        .workflow-node {
          flex: 1;
          min-width: 200px;
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(15, 15, 15, 0.7);
          box-shadow: 0 10px 40px -20px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 2;
        }
        .node-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          background: rgba(255, 255, 255, 0.05);
        }
        .workflow-node h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .workflow-node p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .node-connector {
          flex: 0.2;
          min-width: 60px;
          display: flex;
          align-items: center;
          position: relative;
        }
        .connector-line {
          height: 2px;
          background: linear-gradient(90deg, var(--glass-border), var(--accent-teal));
          width: 100%;
        }
        .connector-arrow {
          position: absolute;
          right: -10px;
          color: var(--accent-teal);
        }

        @media (max-width: 1024px) {
          .workflow-diagram {
            flex-direction: column;
            gap: 40px;
          }
          .node-connector {
            transform: rotate(90deg);
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Workflow;
