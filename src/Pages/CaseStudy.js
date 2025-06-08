// filepath: /Users/kainenwhite/Documents/GitHub/portfolio_v2/src/Pages/CaseStudy.js
import React from 'react';
import { Link } from 'react-router-dom';
import './_Pages.css'; // General page styling
import './ProjectsCardsGrid.css'; // Specific styling for project elements if needed
import { ArrowLeft } from 'lucide-react';

// Helper function to render list items
const renderListItems = (items, type) => {
  if (!items || items.length === 0) return <p>No {type} information available.</p>;
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

// Helper function to render testimonials
const renderTestimonials = (testimonials) => {
  if (!testimonials || testimonials.length === 0) return null;
  return (
    <div className="testimonials-section">
      <h3>Testimonials</h3>
      {testimonials.map((testimonial, index) => (
        <blockquote key={index} className="testimonial-item">
          <p>"{testimonial.quote}"</p>
          <footer>
            {testimonial.photo && <img src={testimonial.photo} alt={`${testimonial.name}, ${testimonial.title}`} className="testimonial-photo" loading="lazy" />}
            <cite>
              <strong>{testimonial.name}</strong>, {testimonial.title} at {testimonial.company}
            </cite>
          </footer>
        </blockquote>
      ))}
    </div>
  );
};

function CaseStudy({ project }) {
  if (!project) {
    return <p>Project data is not available.</p>; // Or a more sophisticated loading/error state
  }

  // Destructure project data for easier access
  const {
    title,
    description,
    image,
    problem,
    process,
    solution,
    businessImpact,
    role,
    team,
    technologies,
    processDocs, // Can be JSX
    testimonials, // Array of testimonial objects
    prototypeEmbed, // String containing iframe code
    links
  } = project;

  return (
    <div className="CaseStudy Page contrast-section">
      <div className="non-contrast-section hero" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Link to="/projects" className="back-to-projects-link" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1rem', textDecoration: 'none' }}>
          <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back to All Projects
        </Link>
        <h1>{title}</h1>
        <p className="subtitle">{description}</p>
        {image && <img src={image} alt={`${title} project mockup`} className="case-study-hero-image" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '1rem' }} loading="lazy" />}
      </div>

      <div className="case-study-content left-right-padding" style={{ maxWidth: '800px', margin: '0 auto'}}>
        
        <section id="problem">
          <h2>The Problem</h2>
          {renderListItems(problem, 'problem')}
        </section>

        {role && team && (
          <section id="role-team">
            <h2>My Role & Team</h2>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Team:</strong> {team}</p>
          </section>
        )}

        <section id="process">
          <h2>The Process</h2>
          {renderListItems(process, 'process')}
        </section>

        {processDocs && (
          <section id="process-documentation">
            <h3>Process Documentation</h3>
            {typeof processDocs === 'function' ? processDocs() : processDocs}
          </section>
        )}

        {prototypeEmbed && (
          <section id="interactive-prototype">
            <h2>Interactive Prototype</h2>
            <div dangerouslySetInnerHTML={{ __html: prototypeEmbed }} />
          </section>
        )}

        <section id="solution">
          <h2>The Solution</h2>
          {renderListItems(solution, 'solution')}
        </section>

        {businessImpact && (
          <section id="impact-results">
            <h2>Impact & Results</h2>
            {renderListItems(businessImpact, 'business impact')}
          </section>
        )}

        {technologies && technologies.length > 0 && (
          <section id="technologies">
            <h2>Technologies Used</h2>
            <ul className="technologies-list">
              {technologies.map((tech, index) => <li key={index}>{tech}</li>)}
            </ul>
          </section>
        )}

        {renderTestimonials(testimonials)}

        {links && (links.demo || links.github) && (
          <section id="project-links" className="cta-section" style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--bg-color-non-contrast)', borderRadius: '8px' }}>
            <h2>Explore Further</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
              {links.demo && <a href={links.demo} target="_blank" rel="noopener noreferrer" className="cta-btn primary">View Live Demo</a>}
              {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer" className="cta-btn secondary">View on GitHub</a>}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default CaseStudy;
