import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MetricsDisplay from '../../../Components/MetricsDisplay/MetricsDisplay';
import './CaseStudy.css';

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
          <p>{`"${testimonial.quote}"`}</p>
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

<<<<<<< HEAD

// Helper to parse business impact into metrics for MetricsDisplay (from /Pages/CaseStudy.js)
const parseBusinessImpactToMetrics = (impacts) => {
  if (!impacts || !Array.isArray(impacts)) return null;
  return impacts.map((impact) => {
    const percentMatch = impact.match(/(\d+\.?\d*)%/);
    const ratingMatch = impact.match(/(\d+\.?\d*)\s*\/\s*(\d+)/);
    const timeMatch = impact.match(/(\d+):(\d+)/);
    const numberMatch = impact.match(/(\d+\.?\d*)/);
    let value, type, icon = 'increase';
    if (percentMatch) {
      value = parseFloat(percentMatch[1]);
      type = 'percentage';
      icon = impact.toLowerCase().includes('increase') || impact.toLowerCase().includes('improve') ? 'increase' : 'target';
    } else if (ratingMatch) {
      value = parseFloat(ratingMatch[1]);
      type = 'rating';
      icon = 'award';
    } else if (timeMatch) {
      value = `${timeMatch[1]}:${timeMatch[2]}`;
      type = 'time';
      icon = 'target';
    } else if (numberMatch) {
      value = parseFloat(numberMatch[1]);
      type = 'number';
      icon = 'users';
    }
    return {
      value,
      type,
      label: impact,
      icon
    };
  });
};

function CaseStudy({
  title,
  description,
  problem,
  process,
  solution,
  technologies,
  image,
  businessImpact,
  role,
  team,
  processDocs,
  testimonials,
  prototypeEmbed,
  links,
  galleryImages
}) {
  const navigate = useNavigate();
  const businessMetrics = parseBusinessImpactToMetrics(businessImpact);
=======
function CaseStudy({ title, description, problem, process, solution, technologies, image, businessImpact, role, team, processDocs, testimonials, prototypeEmbed, links, galleryImages }) {
  const navigate = useNavigate();
  
  // Convert businessImpact strings to MetricsDisplay format
  const parseBusinessImpactToMetrics = (impacts) => {
    if (!impacts || !Array.isArray(impacts)) return null;
    
    return impacts.map((impact) => {
      // Extract numbers and determine type
      const percentMatch = impact.match(/(\d+\.?\d*)%/);
      const ratingMatch = impact.match(/(\d+\.?\d*)\s*\/\s*(\d+)/);
      const timeMatch = impact.match(/(\d+):(\d+)/);
      const numberMatch = impact.match(/(\d+\.?\d*)/);
      
      let value, type, icon = 'increase';
      
      if (percentMatch) {
        value = parseFloat(percentMatch[1]);
        type = 'percentage';
        icon = impact.toLowerCase().includes('increase') || impact.toLowerCase().includes('improve') ? 'increase' : 'target';
      } else if (ratingMatch) {
        value = parseFloat(ratingMatch[1]);
        type = 'rating';
        icon = 'award';
      } else if (timeMatch) {
        value = `${timeMatch[1]}:${timeMatch[2]}`;
        type = 'time';
        icon = 'target';
      } else if (numberMatch) {
        value = parseFloat(numberMatch[1]);
        type = 'number';
        icon = 'users';
      }
      
      return {
        value,
        type,
        label: impact,
        icon
      };
    });
  };

  const businessMetrics = parseBusinessImpactToMetrics(businessImpact);

>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
  return (
    <div className="case-study">
      <button onClick={() => navigate('/projects')} className="back-to-projects-btn">
        <ArrowLeft size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        Back to All Projects
      </button>
      <h1>{title}</h1>
<<<<<<< HEAD
=======

>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      {image && (
        <div className="case-study-image">
          <img src={image} alt={title} />
        </div>
      )}
      <p className="case-study-description">{description}</p>
<<<<<<< HEAD
=======
      
>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      {businessImpact && businessMetrics && (
        <div className="case-study-section">
          <h2>Business Impact</h2>
          <MetricsDisplay metrics={businessMetrics} layout="row" />
        </div>
      )}
<<<<<<< HEAD
=======
      
>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      {(role || team) && (
        <div className="case-study-section">
          <h2>Role & Team</h2>
          {role && <p><strong>Role:</strong> {role}</p>}
          {team && <p><strong>Team:</strong> {team}</p>}
        </div>
      )}
<<<<<<< HEAD
=======
      
>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      <div className="case-study-section">
        <h2>The Problem</h2>
        {renderListItems(problem, 'problem')}
      </div>
<<<<<<< HEAD
=======
      
>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      <div className="case-study-section">
        <h2>The Process</h2>
        {renderListItems(process, 'process')}
        {processDocs && (
          <div className="case-study-process-docs">
            {typeof processDocs === 'function' ? processDocs() : processDocs}
          </div>
        )}
      </div>
<<<<<<< HEAD
=======

>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      {prototypeEmbed && (
        <div className="case-study-section" id="interactive-prototype">
          <h2>Interactive Prototype</h2>
          <div className="case-study-prototype-embed" style={{margin: '1.5rem 0'}}>
            {typeof prototypeEmbed === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: prototypeEmbed }} />
            ) : prototypeEmbed}
          </div>
        </div>
      )}
<<<<<<< HEAD
=======
      
>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      <div className="case-study-section">
        <h2>The Solution</h2>
        {renderListItems(solution, 'solution')}
      </div>
<<<<<<< HEAD
=======
      
>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      {technologies && technologies.length > 0 && (
        <div className="case-study-section">
          <h2>Technologies Used</h2>
          <ul className="technologies-list">
            {technologies.map((tech, index) => <li key={index}>{tech}</li>)}
          </ul>
        </div>
      )}
<<<<<<< HEAD
      {renderTestimonials(testimonials)}
=======
      
      {renderTestimonials(testimonials)}

>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      {links && (links.demo || links.github) && (
        <div className="case-study-section cta-section" id="project-links" style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--bg-color-non-contrast)', borderRadius: '8px' }}>
          <h2>Explore Further</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            {links.demo && <a href={links.demo} target="_blank" rel="noopener noreferrer" className="cta-btn primary">View Live Demo</a>}
            {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer" className="cta-btn secondary">View on GitHub</a>}
          </div>
        </div>
      )}
<<<<<<< HEAD
=======

>>>>>>> 2a1c9b78598e931bdf4eb1e8808cabcdd023a28b
      <div className="case-study-gallery">
        {galleryImages && galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`${title} gallery ${index + 1}`} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
