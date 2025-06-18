'use client';

import React from 'react';
import CTAButton from '../components/CTAButton/CTAButton';
import Deck from '../components/Deck/Deck';
import MetricsDisplay from '../components/MetricsDisplay/MetricsDisplay';
import { getFeaturedProjects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { portfolioMetrics } from '../data/portfolioMetrics';

function Homepage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="Homepage Page">
      {/* Hero Section */}
      <section className="hero non-contrast-section" id="hero" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '2.5rem', display: 'block', margin: '0 auto 12px', color: 'var(--primary-accent)' }} aria-hidden="true">✨</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
          Crafting <span style={{ color: 'var(--primary-accent)' }}>User-Centric</span> Digital Experiences
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-color)' }}>
          I&apos;m a passionate designer transforming complex problems into intuitive and engaging solutions. Explore my work to see how I blend
          creativity with strategy to deliver impactful results.
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
            href="/about#my-process" 
            variant="secondary" 
            size="medium"
            aria-label="Learn about my design process"
          >
            My Process
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

      {/* Featured Projects Section */}
      <section className="featured-projects contrast-section" id="featured-projects" style={{ padding: '4rem 2rem', margin: '2rem 0' }}>
        <span style={{ fontSize: '2rem', display: 'block', margin: '0 auto 8px', color: 'var(--primary-accent)' }} aria-hidden="true">📁</span>
        <Deck 
          title="Featured Projects"
          description="Explore some of my most impactful design work and development projects."
          items={featuredProjects} 
          actionType="caseStudy, demo"
          analytics={{ category: 'Homepage', action: 'View Featured Projects' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <CTAButton 
            href="/projects" 
            variant="secondary" 
            size="medium"
            aria-label="View all design projects"
          >
            View All Projects
          </CTAButton>
        </div>
      </section>

      {/* Portfolio Metrics Section */}
      <section className="portfolio-metrics non-contrast-section" style={{ margin: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>Results That Matter</h2>
        <p style={{
          marginBottom: '3rem',
          fontSize: '1.1rem',
          color: 'var(--secondary-accent)',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Every project I take on is designed with measurable outcomes in mind, delivering real value to users and businesses alike.
        </p>
        <MetricsDisplay metrics={portfolioMetrics} layout="horizontal" variant="highlight" />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials contrast-section" style={{ padding: '4rem 2rem', margin: '2rem 0' }}>
        <span style={{ fontSize: '2rem', display: 'block', margin: '0 auto 8px', color: 'var(--primary-accent)' }} aria-hidden="true">💬</span>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-color)' }}>What Clients Say</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              background: 'var(--card-background)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid var(--secondary-accent)',
              textAlign: 'left'
            }}>
              <blockquote style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                color: 'var(--text-color)',
                lineHeight: '1.6'
              }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img 
                  src={testimonial.photo} 
                  alt={`Photo of ${testimonial.name}`}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-color)' }}>{testimonial.name}</div>
                  <div style={{ color: 'var(--secondary-accent)', fontSize: '0.9rem' }}>
                    {testimonial.title} - {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage-cta non-contrast-section" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '2rem', display: 'block', margin: '0 auto 8px', color: 'var(--primary-accent)' }} aria-hidden="true">🤝</span>
        <h2 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>Ready to build something great together?</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-color)' }}>
          Whether you have a project in mind, need a design consultation, or just want to connect, I&apos;d love to hear from you.
        </p>
        <CTAButton 
          href="/contact" 
          variant="primary" 
          size="large"
          aria-label="Contact Kainen White to start a project"
        >
          Start a Project
        </CTAButton>
      </section>
    </div>
  );
}

export default Homepage;
