import React from 'react';
import { Link } from 'react-router-dom';
import Deck from '../../Components/Deck/Deck';
import { featuredProjects } from '../featuredProjectsData';
import { Sparkle, FolderOpen, Handshake, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Lee',
    company: 'Acme Corp',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Working with Kainen was a game-changer. The new product design increased our user engagement by 40%.',
    title: 'Product Manager'
  },
  {
    name: 'Brad Smith',
    company: 'Smith Digital',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Kainen delivered exactly what we needed—on time and with a level of polish that impressed our whole team.',
    title: 'CEO'
  },
  {
    name: 'Priya Patel',
    company: 'StartupX',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The design process was collaborative and insightful. Our conversion rate improved dramatically.',
    title: 'Founder'
  }
];

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

      <section className="testimonials contrast-section" id="testimonials" style={{ margin: '3rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}><Quote size={32} style={{ verticalAlign: 'middle', marginRight: 8 }} />What Clients Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" style={{
              background: 'var(--off-white, #fff)',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              border: '1px solid var(--gray, #e0e0e0)',
              maxWidth: 340,
              minWidth: 260,
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flex: '1 1 260px',
            }}>
              <img src={t.photo} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 16, border: '3px solid var(--accent-color, #007acc)' }} />
              <p style={{ fontStyle: 'italic', color: 'var(--secondary-text-color, #555)', marginBottom: 16 }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ fontWeight: 600, color: 'var(--text-color, #222)' }}>{t.name}</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--secondary-text-color, #888)' }}>{t.title}, {t.company}</div>
            </div>
          ))}
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
