import React from 'react';
import Deck from '../Components/Deck/Deck';
import { featuredProjects } from './featuredProjectsData';
import { Sparkle, FolderOpen, Handshake } from 'lucide-react';

function Homepage() {
  return (
    <div className="Homepage Page">
      <div className="hero non-contrast-section" id="hero">
        <Sparkle size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Crafting <span className="highlight">User-Centric</span> Digital Experiences</h1>
        <p>I&apos;m a passionate designer transforming complex problems into intuitive and engaging solutions. Explore my work to see how I blend creativity with strategy to deliver impactful results.</p>
        <div className="hero-actions">
          <a href="/projects" className="cta-btn">View Projects</a>
          <a href="#my-process" className="cta-btn">My Process</a>
          <a href="/contact" className="cta-btn">Get in Touch</a>
        </div>
      </div>

      <section className="featured-projects contrast-section" id="my-process">
        <FolderOpen size={32} style={{ display: 'block', margin: '0 auto 8px' }} />
        <h2 className="left-right-padding">Featured Projects</h2>
        <Deck items={featuredProjects} actionType="caseStudy" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="/projects" className="cta-btn view-all">View All Projects</a>
        </div>
      </section>

      <section className="homepage-cta non-contrast-section">
        <Handshake size={32} style={{ display: 'block', margin: '0 auto 8px' }} />
        <h2>Ready to build something great together?</h2>
        <p>Whether you have a project in mind, need a design consultation, or just want to connect, I&apos;d love to hear from you.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="/contact" className="cta-btn">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
