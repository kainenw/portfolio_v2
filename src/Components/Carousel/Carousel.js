import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    if (!items || !items.length) return;
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    if (!items || !items.length) return;
    const newIndex = (currentIndex + 1) % items.length;
    goToSlide(newIndex);
  };

  const getSlidePosition = (index) => {
    if (!items || !items.length) return 'hidden';
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(items.length - 1)) return 'right';
    if (diff === -1 || diff === items.length - 1) return 'left';
    return 'hidden';
  };

  if (!items || items.length === 0) {
    return <div className="carousel-empty">No projects to display</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button
          className="carousel-nav carousel-nav-left"
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          &#8249;
        </button>

        <div className="carousel-slides">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-slide carousel-slide-${getSlidePosition(index)}`}
              onClick={() => index !== currentIndex && goToSlide(index)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && index !== currentIndex) {
                  e.preventDefault();
                  goToSlide(index);
                }
              }}
              role="button"
              tabIndex={index !== currentIndex ? 0 : -1}
              aria-label={`Go to ${item.title}`}
            >
              <div className="project-card">
                <div className="project-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="project-content">
                  <h3>{item.title}</h3>
                  <p className="project-description">{item.description}</p>
                  <div className="project-details">
                    <div className="project-section">
                      <h4>Problem</h4>
                      <ul>
                        {item.problem.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-section">
                      <h4>Process</h4>
                      <ul>
                        {item.process.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-section">
                      <h4>Solution</h4>
                      <ul>
                        {item.solution.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {item.technologies && (
                    <div className="project-technologies">
                      <h4>Technologies</h4>
                      <div className="tech-tags">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.links && (
                    <div className="project-links">
                      {item.links.demo && (
                        <a href={item.links.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                          View Demo
                        </a>
                      )}
                      {item.links.github && (
                        <a href={item.links.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-nav carousel-nav-right"
          onClick={goToNext}
          aria-label="Next project"
        >
          &#8250;
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
