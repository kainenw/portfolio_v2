'use client';

import React from 'react';
import CTAButton from '../components/CTAButton/CTAButton';
import Deck from '../components/Deck/Deck';
import MetricsDisplay from '../components/MetricsDisplay/MetricsDisplay';
import { getFeaturedProjects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { portfolioMetrics } from '../data/portfolioMetrics';
import { Sparkle, FolderOpen, Handshake, Quote } from 'lucide-react';
import './homepage.css';

function Homepage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="Homepage Page">
      {/* Hero Section */}
      <section className="hero non-contrast-section" id="hero" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <Sparkle size={40} style={{ display: 'block', margin: '0 auto 12px' }} aria-hidden="true" />
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
      <section className="featured-projects contrast-section" id="my-process" style={{ padding: '4rem 2rem', margin: '2rem 0' }}>
        <FolderOpen size={32} style={{ display: 'block', margin: '0 auto 8px' }} aria-hidden="true" />
        <h2 className="left-right-padding">Featured Projects</h2>
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
          maxWidth: '600px',
          margin: '0 auto 3rem',
          color: '#fff', // Fixed contrast ratio for WCAG 2.1 AA compliance
        }}>
          Numbers that showcase the impact of user-centered design and strategic thinking.
        </p>
        <MetricsDisplay metrics={portfolioMetrics} layout="horizontal" variant="highlight" />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials contrast-section" id="testimonials" style={{ margin: '3rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-color)' }}>
          <Quote size={32} style={{ verticalAlign: 'middle', marginRight: 8 }} aria-hidden="true" />
          What Clients Say
        </h2>
        <div className="testimonials-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }} role="list">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="testimonial-card"
              role="listitem"
            >
              <img
                src={t.photo}
                alt={`${t.name}, ${t.title} at ${t.company}`}
                className="testimonial-photo"
                loading="lazy"
              />
              <blockquote className="quote">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="name">{t.name}</div>
              <div className="title-company">
                {t.title}, {t.company}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage-cta non-contrast-section" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <Handshake size={32} style={{ display: 'block', margin: '0 auto 8px' }} aria-hidden="true" />
        <h2 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>Ready to build something great together?</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-color)' }}>
          Whether you have a project in mind, need a design consultation, or just want to connect, I&apos;d love to hear from you.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CTAButton 
            href="/contact" 
            variant="primary" 
            size="large" 
            style={{ marginTop: '1rem' }}
            aria-label="Contact Kainen White to start working together"
          >
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
