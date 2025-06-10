import '../_Pages.css'
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import headshot from '../../img/headshot.webp';
import design from '../../img/design.webp';
import dev from '../../img/dev.webp';
import designthinking from '../../img/designthinking.webp';
import portfolio from '../../img/projects/portfolio.webp';
import DownloadResumeButton from '../../Components/DownloadResumeButton/DownloadResumeButton';
import CTAButton from '../../Components/CTAButton/CTAButton';

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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kainen White",
    "jobTitle": "Product & UX Designer",
    "url": "https://www.yourdomain.com/about", // Replace with actual URL
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile" // Replace with actual LinkedIn profile
      // Add other relevant professional profiles here (e.g., GitHub, Dribbble)
    ],
    "image": "https://www.yourdomain.com/headshot.jpg" // Replace with actual headshot URL
  };

  return (
    <>
      <Helmet>
        <title>About | Kainen White</title>
        <meta name="description" content="Learn more about Kainen White's professional background, design philosophy, skills, and the services offered." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About | Kainen White" />
        <meta property="og:description" content="Learn more about Kainen White's professional background, design philosophy, skills, and the services offered." />
        <meta property="og:url" content="https://www.yourdomain.com/about" /> {/* Replace with actual URL */}
        <meta property="og:image" content="https://www.yourdomain.com/og-image-about.png" /> {/* Replace with actual image URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Kainen White" />
        <meta name="twitter:description" content="Learn more about Kainen White's professional background, design philosophy, skills, and the services offered." />
        <meta name="twitter:image" content="https://www.yourdomain.com/twitter-image-about.png" /> {/* Replace with actual image URL */}

        {/* Schema.org JSON-LD for Person */}
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <div className="About Page">
      <div className="non-contrast-section hero" style={{ position: 'relative' }}>
        <h1>Design With Purpose. Built for Results.</h1>
        <h2>User-centered thinking meets measurable impact.</h2>
        
        <div className="info-group">
          <img src={headshot} alt="Headshot of Kainen" loading="lazy" />
          <div>
            {/* <h3>About Me</h3> */}
            <p>
              I&apos;m Kainen. I design intuitive, conversion-focused experiences that solve real user problems and drive business outcomes. With a process grounded in strategy, research, and iterative testing, every project is crafted to deliver value—both to users and stakeholders.
            </p>
          </div>
        </div>
        <CTAButton variant="primary" size="medium" className="tab-button active" onClick={() => setModalOpen(true)}>
          Start a Project
        </CTAButton>
        
        {/* Download Resume Button in Hero Section */}
        <div style={{ marginTop: '1rem' }}>
          <DownloadResumeButton variant="secondary" />
        </div>
      </div>

      {/* Services Section */}
      <div className="contrast-section" id="services">
        <h2>Services I Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img className="icon" src={designthinking} alt="UX Design icon" loading="lazy" />
            </div>
            <h3>UX/UI Design</h3>
            <p>User research, wireframing, prototyping, and visual design that creates intuitive and engaging experiences.</p>
            <ul>
              <li>User research & personas</li>
              <li>Wireframes & prototypes</li>
              <li>Visual design & branding</li>
              <li>Usability testing</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <img className="icon" src={dev} alt="Development icon" loading="lazy" />
            </div>
            <h3>Frontend Development</h3>
            <p>Responsive, accessible websites and applications built with modern technologies and best practices.</p>
            <ul>
              <li>React & JavaScript development</li>
              <li>Responsive design implementation</li>
              <li>Performance optimization</li>
              <li>Accessibility compliance</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <img className="icon" src={design} alt="Consultation icon" loading="lazy" />
            </div>
            <h3>Design Consultation</h3>
            <p>Strategic guidance to improve your digital presence and user experience through expert analysis and recommendations.</p>
            <ul>
              <li>UX audits & analysis</li>
              <li>Design system creation</li>
              <li>Conversion optimization</li>
              <li>Strategy & planning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How I Work Section */}
      <div className="non-contrast-section" id="how-i-work">
        <h2>How I Work</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
          My process is collaborative, iterative, and always focused on solving real user problems while achieving business goals.
        </p>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Discovery & Research</h3>
            <p>I start by understanding your users, business goals, and constraints through research, interviews, and competitive analysis.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Strategy & Planning</h3>
            <p>Based on research insights, I develop a clear strategy and project plan that aligns user needs with business objectives.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Design & Prototype</h3>
            <p>I create wireframes, prototypes, and high-fidelity designs, iterating based on feedback and testing throughout.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Build & Test</h3>
            <p>I develop responsive, accessible solutions and conduct usability testing to ensure the best possible user experience.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Launch & Optimize</h3>
            <p>After launch, I monitor performance, gather user feedback, and make data-driven improvements to maximize results.</p>
          </div>
        </div>
      </div>
      <div>
        
        {/* Download Resume CTA Section */}
        <div className="contrast-section" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h2>Ready to Work Together?</h2>
          <p style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Download my resume to see my full experience and qualifications, or start a conversation about your next project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <DownloadResumeButton variant="primary" />
            <button
              className="cta-btn outline"
              onClick={() => setModalOpen(true)}
              style={{
                background: 'transparent',
                color: 'var(--accent-color, #005A9C)',
                border: '2px solid var(--accent-color, #005A9C)',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '180px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent-color, #005A9C)';
                e.target.style.color = '#fff';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--accent-color, #005A9C)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Start a Project
            </button>
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
    </>
  )
}
export default About
