import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Deck from '../../Components/Deck/Deck';
import { featuredProjects } from '../featuredProjectsData';
import { Sparkle, FolderOpen, Handshake } from 'lucide-react';

function Homepage() {
  return (
    <div className="Homepage Page">
      <div className="hero non-contrast-section" id="hero">
        <Sparkle size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Crafting <span className="highlight">User-Centric</span> Digital Experiences</h1>
        <p>I&apos;m a passionate designer transforming complex problems into intuitive and engaging solutions. Explore my work to see how I blend creativity with strategy to deliver impactful results.</p>
        <div className="hero-actions">
          <Link to="/projects" className="cta-btn">View Projects</Link> {/* Changed to Link */}
          <Link to="/about#my-process" className="cta-btn">My Process</Link> {/* Changed to Link */}
          <Link to="/contact" className="cta-btn">Get in Touch</Link> {/* Changed to Link */}
        </div>
      </div>

      <section className="featured-projects contrast-section" id="my-process">
        <FolderOpen size={32} style={{ display: 'block', margin: '0 auto 8px' }} />
        <h2 className="left-right-padding">Featured Projects</h2>
        <Deck items={featuredProjects} actionType="caseStudy, demo" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/projects" className="cta-btn view-all">View All Projects</Link> {/* Also change this one for consistency */}
        </div>
      </section>

      <section className="homepage-cta non-contrast-section">
        <Handshake size={32} style={{ display: 'block', margin: '0 auto 8px' }} />
        <h2>Ready to build something great together?</h2>
        <p>Whether you have a project in mind, need a design consultation, or just want to connect, I&apos;d love to hear from you.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/contact" className="cta-btn">Get in Touch</Link> {/* Also change this one for consistency */}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
