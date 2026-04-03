import React from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">GET IN <span className="text-gradient">TOUCH</span></h2>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Ready to collaborate on innovative ML systems?</h3>
            <p>I'm currently open to opportunities in Machine Learning Engineering, Data Science, and AI Research. Let's build something exceptional.</p>

            <div className="contact-methods">
              <a href="mailto:remilsalim369@gmail.com" className="contact-method glass-card">
                <Mail size={24} className="icon-teal" />
                <span>remilsalim369@gmail.com</span>
              </a>
              <div className="contact-social-row">
                <a href="https://github.com/remilsalim" target="_blank" rel="noopener noreferrer" className="contact-social-item glass-card">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/remil-salim-k-p/" target="_blank" rel="noopener noreferrer" className="contact-social-item glass-card">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-form glass-card"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project or opportunity..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-submit">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          background-color: var(--bg-secondary);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 40px;
        }
        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-method {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 24px;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .contact-method:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(10px);
          border-color: var(--accent-teal);
        }
        .contact-social-row {
          display: flex;
          gap: 20px;
        }
        .contact-social-item {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px;
          transition: all 0.3s ease;
        }
        .contact-social-item:hover {
          color: var(--accent-teal);
          border-color: var(--accent-teal);
          transform: translateY(-8px);
        }
        
        .contact-form {
          padding: 3rem;
          background: var(--card-bg);
          border: 1px solid var(--glass-border);
        }
        .form-group {
          margin-bottom: 24px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          background: var(--bg-accent);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-teal);
          box-shadow: 0 0 10px rgba(45, 212, 191, 0.1);
        }
        .contact-submit {
          width: 100%;
          margin-top: 10px;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-info { text-align: center; }
          .contact-methods { width: 100%; max-width: 500px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
