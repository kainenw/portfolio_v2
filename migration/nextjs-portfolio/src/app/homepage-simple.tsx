'use client';

import React from 'react';
import CTAButton from '../components/CTAButton/CTAButton';

function Homepage() {
  return (
    <div className="Homepage Page">
      {/* Hero Section */}
      <section className="hero non-contrast-section" id="hero" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
          Crafting <span style={{ color: 'var(--primary-accent)' }}>User-Centric</span> Digital Experiences
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-color)' }}>
          I&apos;m a passionate designer transforming complex problems into intuitive and engaging solutions.
        </p>
        <div className="hero-actions" role="group" aria-label="Main navigation actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CTAButton 
            href="/projects" 
            variant="primary" 
            size="medium"
            aria-label="View my design projects and case studies"
          >
            View Projects
          </CTAButton>
          <CTAButton 
            href="/about" 
            variant="secondary" 
            size="medium"
            aria-label="Learn about my design process"
          >
            About Me
          </CTAButton>
          <CTAButton 
            href="/contact" 
            variant="primary" 
            size="medium"
            aria-label="Contact me for opportunities"
          >
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
