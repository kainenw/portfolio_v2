import React from 'react';
import { useNavigate } from 'react-router-dom';


function CaseStudy({ title, description, problem, process, solution, technologies, image, businessImpact, role, team, processDocs, testimonials, prototypeEmbed }) {
  const navigate = useNavigate();
  return (
    <div className="case-study">
      <button onClick={() => navigate('/projects')} className="back-to-projects-btn">
        <span className="back-icon" aria-hidden="true" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5em' }}>
          {/* Simple left arrow SVG icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
            <path d="M12.5 15L8 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        Back to All Projects
      </button>
      <h1>{title}</h1>

      {image && (
        <div className="case-study-image">
          <img src={image} alt={title} />
        </div>
      )}
      <p className="case-study-description">{description}</p>
      {/* Quantified Business Impact */}
      {businessImpact && (
        <div className="case-study-section">
          <h2>Business Impact</h2>
          <div className="case-study-metrics-row">
            {businessImpact.map((item, idx) => {
              // Extract the first number (with optional +/- and %) for color logic
              const match = item.match(/([-+]?\d+\.?\d*)%?/);
              let isPositive = null;
              if (match) {
                const num = parseFloat(match[1]);
                isPositive = num > 0;
              }
              return (
                <div
                  key={idx}
                  className={`case-study-metric-box ${isPositive === true ? 'metric-positive' : isPositive === false ? 'metric-negative' : ''}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Role & Team */}
      {(role || team) && (
        <div className="case-study-section">
          <h2>Role & Team</h2>
          {role && <p><strong>Role:</strong> {role}</p>}
          {team && <p><strong>Team:</strong> {team}</p>}
        </div>
      )}
      {/* Problem */}
      <div className="case-study-section">
        <h2>Problem</h2>
        <ul>
          {problem && problem.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
      {/* Process */}
      <div className="case-study-section">
        <h2>Process</h2>
        <ul>
          {process && process.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
        {/* Detailed process documentation (optional) */}
        {processDocs && (
          <div className="case-study-process-docs">
            {processDocs}
          </div>
        )}
      </div>
      {/* Solution */}
      <div className="case-study-section">
        <h2>Solution</h2>
        <ul>
          {solution && solution.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
      {/* Technologies */}
      {technologies && (
        <div className="case-study-section">
          <h2>Technologies</h2>
          <div className="case-study-technologies">
            {technologies.map((tech, idx) => (
              <span key={idx} className="case-study-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      )}
      {/* Client Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <div className="case-study-section">
          <h2>Client Testimonial{testimonials.length > 1 ? 's' : ''}</h2>
          <div className="case-study-testimonials">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-block">
                <blockquote>“{t.quote}”</blockquote>
                <div className="testimonial-client">
                  {t.photo && <img src={t.photo} alt={t.name + ' photo'} className="testimonial-photo" />}
                  <span className="testimonial-name">{t.name}</span>
                  {t.company && <span className="testimonial-company">{t.company}</span>}
                  {t.title && <span className="testimonial-title">{t.title}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Interactive Prototype */}
      {prototypeEmbed && (
        <div className="case-study-section">
          <h2>Interactive Prototype</h2>
          <div className="case-study-prototype-embed" style={{margin: '1.5rem 0'}}>
            {/* Accepts a string of HTML/iframe or a React node */}
            {typeof prototypeEmbed === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: prototypeEmbed }} />
            ) : prototypeEmbed}
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseStudy;
