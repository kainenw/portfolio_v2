import '../_Pages.css'
import React, { useState } from 'react';
import headshot from '../../img/headshot.png';
import design from '../../img/design.png';
import dev from '../../img/dev.png';
import designthinking from '../../img/designthinking.png';
import portfolio from '../../img/projects/portfolio.png';

function About() {
  const [modalOpen, setModalOpen] = useState(false);

  // Contact form copied from Contact.js
  const contactForm = (
    <form
      action="mailto:kainen.white@gmail.com"
      method="POST"
      encType="text/plain"
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      <input
        name="name"
        placeholder="Your Name"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );

  return (
    <div className="About Page">
      <div className="non-contrast-section hero" style={{ position: 'relative' }}>
        <h1>Design With Purpose. Built for Results.</h1>
        <h2>User-centered thinking meets measurable impact.</h2>
        
        <div className="info-group">
          <img src={headshot} alt="Headshot of Kainen" />
          <div>
            {/* <h3>About Me</h3> */}
            <p>
              I&apos;m Kainen. I design intuitive, conversion-focused experiences that solve real user problems and drive business outcomes. With a process grounded in strategy, research, and iterative testing, every project is crafted to deliver value—both to users and stakeholders.
            </p>
          </div>
        </div>
        <button
          className="contrast-button tab-button active"
          style={{
            background: 'linear-gradient(135deg, var(--accent-color, #007acc), var(--accent-hover-color, #005fa3))',
            color: '#fff',
            border: 'none',
            borderRadius: '26px',
            padding: '0.75rem 1.5rem',
            margin: '0 auto',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s, transform 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, var(--accent-hover-color, #005fa3), var(--accent-color, #007acc))';
            e.target.style.transform = 'translateY(-2px) scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, var(--accent-color, #007acc), var(--accent-hover-color, #005fa3))';
            e.target.style.transform = 'translateY(0) scale(1)';
          }}
          onClick={() => setModalOpen(true)}
        >
          Start a Project
        </button>
      </div>
      <div className="contrast-section">
        <h2>My Work</h2>
        <div className="info-group">
          <img className="icon" src={design} alt="project 2" />
          <div>
            <ul>
              <h3>Design</h3>
              <li>
                Voting Preparation Service: Intuitive app to guide voters through the election process, promoting
                engagement.
              </li>
              <li>
                Portfolio v2: Redesign of my personal portfolio, showcasing my best work and demonstrating my evolving
                design skills.
              </li>
              <li>
                Sushi App: User-friendly interface designed to simplify the food ordering process for a local
                restaurant.
              </li>
            </ul>
          </div>
        </div>
        <div className="info-group">
          <img className="icon" src={dev} alt="programming icon" />
          <div>
            <ul>
              <h3>Development</h3>
              <li>Portfolio v2: Building the redesign for my portfolio page, including several portfolio projects.</li>
              <li>
                Reddit App: Streamlined Reddit browsing experience for improved efficiency and enjoyment, built with
                React and Redux.
              </li>
              <li>
                Tonnetz Visualizer: Interactive application that visualizes harmonic concepts for musicians, enhancing
                their understanding.
              </li>
              <li>
                Savings Calculator: Financial planning tool empowering users to achieve their financial goals, built
                with javascript and jquery.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="non-contrast-section">
          <h2>Skills:</h2>
          <div className="info-group">
            <img className="icon" src={designthinking} alt="design icon" />
            <div>
              <h3>Design Thinking Process</h3>
              <ul>
                <li>Empathizing with users by creating empathy maps, personas, user stories, and user journey maps</li>
                <li>Defining user pain points</li>
                <li>Ideating design solutions using Crazy Eights, How Might We, and competitive audits</li>
                <li>Creating wireframes and prototypes on paper and digitally</li>
                <li>Developing mockups using visual design elements and principles</li>
                <li>Designing in Figma and Adobe XD</li>
                <li>Conducting interviews and usability studies</li>
                <li>Considering accessibility at every point in the design process</li>
              </ul>
            </div>
          </div>
          <div className="info-group">
            <img className="icon" src={dev} alt="programming icon" />
            <div>
              <h3>Front-End</h3>
              <ul>
                <li>HTML, CSS, JavaScript, Responsive Design, Accessibility Standards</li>
                <li>Version Control, Web Hosting, Familiarity with broader design and development concepts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contrast-section">
          <h2>Experience:</h2>
          <div className="info-group">
            <img className="icon" src={portfolio} alt="portfolio icon" />
            <div>
              <ul>
                <li>
                  Freelance Work: Collaborated with local businesses to improve their websites through both design and
                  development.
                </li>
                <li>
                  Self-Directed Learning: Completed online courses and actively pursuing a deeper understanding of UX
                  design and web development.{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    {/* Modal Contact Window */}
    {modalOpen && (
      <div
        className="modal-overlay"
        role="button"
        aria-label="Close modal by clicking outside"
        tabIndex={0}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          margin: '0 auto',
          background: 'rgba(0,0,0,0.35)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(e) => {
          // Only close if clicking the overlay itself, not its children
          if (e.target === e.currentTarget) {
            setModalOpen(false);
          }
        }}
        onKeyDown={(e) => {
          // Close modal on Escape key or Enter/Space when focused on overlay
          if (e.key === 'Escape' || (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            setModalOpen(false);
          }
        }}
      >
        <div
          className="contrast-section modal-contact"
          role="dialog"
          aria-modal="true"
          aria-label="Start a Project Contact Modal"
          style={{
            minWidth: 320,
            maxWidth: 400,
            width: '90vw',
            padding: '2rem',
            borderRadius: 12,
            boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
            position: 'relative',
            transform: 'translateY(-1px)',
          }}
        >
          <button
            aria-label="Close"
            onClick={() => setModalOpen(false)}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'none',
              border: 'none',
              fontSize: 24,
              color: 'var(--contrast-fg)',
              cursor: 'pointer',
              fontWeight: 700,
              lineHeight: 1
            }}
          >
            ×
          </button>
          <h2 style={{ marginTop: 0 }}>Start a Project</h2>
          {contactForm}
        </div>
      </div>
    )}
    </div>
  )
}
export default About
