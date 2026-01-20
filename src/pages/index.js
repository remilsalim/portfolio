import Link from 'next/link';
import Layout from '@/components/Layout';
import HeroCodeShowcase from '@/components/HeroCodeShowcase';
import { ArrowRight, Code, Database, Music, Activity } from 'lucide-react';

export default function Home() {
  const caseStudies = [
    {
      slug: 'codescope',
      title: 'CodeScope',
      description: 'Zero-dependency static analysis engine running entirely in the browser.',
      icon: <Code size={20} />,
      tech: ['AST Traversal', 'Big O Estimation', 'Vanilla JS']
    },
    {
      slug: 'stacksense',
      title: 'StackSense',
      description: 'Decision engine for tech stack recommendations based on architectural constraints.',
      icon: <Database size={20} />,
      tech: ['Weighted Scoring', 'System Design', 'Python']
    },
    {
      slug: 'facethebeat',
      title: 'FaceTheBeat',
      description: 'Real-time emotion detection pipeline optimizing model inference on the client.',
      icon: <Music size={20} />,
      tech: ['Web Workers', 'TensorFlow.js', 'Performance']
    },
    {
      slug: 'moleculargraph',
      title: 'MolecularGraph',
      description: 'Predicting drug side effects using random forest classifiers on molecular features.',
      icon: <Activity size={20} />,
      tech: ['Feature Extraction', 'Random Forest', 'Data Science']
    }
  ];

  return (
    <Layout>
      <section className="hero section">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              I build systems that make<br />
              <span style={{ color: 'var(--text-secondary)' }}>complex decisions simple.</span>
            </h1>
            <p className="intro-text">
              I'm Remil Salim. I am an engineer focused on tooling, analysis systems, and performance.
              I don't just write code; I design systems that reason about data, optimize trade-offs, and solve actual problems.
            </p>
          </div>
          <div className="hero-visual">
            <HeroCodeShowcase />
          </div>
        </div>
      </section>

      <section className="philosophy section">
        <h2 className="section-title">Engineering Philosophy</h2>
        <div className="grid">
          <div className="card">
            <h3>Tooling First</h3>
            <p>If a task is manual and repetitive, it's a bug. I build tools (like CodeScope) to automate reasoning and analysis.</p>
          </div>
          <div className="card">
            <h3>Data over Intuition</h3>
            <p>Architectural choices should be measurable. I build decision engines (like StackSense) to quantify trade-offs.</p>
          </div>
        </div>
      </section>

      <section className="work section">
        <h2 className="section-title">Selected Engineering Deep Dives</h2>
        <div className="work-list">
          {caseStudies.map((study) => (
            <Link href={`/work/${study.slug}`} key={study.slug} className="work-item">
              <div className="work-header">
                <span className="work-icon">{study.icon}</span>
                <h3>{study.title}</h3>
              </div>
              <p>{study.description}</p>
              <div className="tags">
                {study.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <span className="read-more">Read Engineering Case Study <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .intro-text {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
           .hero-visual {
            order: -1; /* Show visual on top on mobile/tablet */
          }
        }

        .section-title {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: 2rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .card h3 {
          font-size: 1.1rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .work-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .work-item {
          display: block;
          padding: 2rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          transition: transform 0.2s ease, border-color 0.2s ease;
          border-bottom: 1px solid var(--border-color); /* Override default link border */
        }

        .work-item:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }

        .work-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .work-header h3 {
          margin: 0;
          font-size: 1.4rem;
        }

        .work-icon {
          color: var(--text-secondary);
        }

        .tags {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .read-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
      `}</style>
    </Layout>
  );
}
