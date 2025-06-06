import React from 'react';
import { useNavigate } from 'react-router-dom';


function CaseStudy({ title, description, problem, process, solution, technologies, image }) {
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
      <div className="case-study-section">
        <h2>Problem</h2>
        <ul>
          {problem && problem.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
      <div className="case-study-section">
        <h2>Process</h2>
        <ul>
          {process && process.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
      <div className="case-study-section">
        <h2>Solution</h2>
        <ul>
          {solution && solution.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
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
    </div>
  );
}

export default CaseStudy;
