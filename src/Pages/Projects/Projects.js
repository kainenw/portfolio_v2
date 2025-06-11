import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../_Pages.css';
import Deck from '../../Components/Deck/Deck';
import { FolderOpen } from 'lucide-react';
import { designProjects, developmentProjects } from '../../Data/projectsData';

function Projects() {
  const [activeTab, setActiveTab] = useState('design');

  const handleTabSwitch = tab => setActiveTab(tab);

  return (
    <div className="Projects Page">
      <Helmet>
        <title>Design Portfolio & Case Studies | Kainen White</title>
        <meta name="description" content="Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results." />
        {/* Open Graph tags */}
        <meta property="og:title" content="Design Portfolio & Case Studies | Kainen White" />
        <meta property="og:description" content="Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results." />
        <meta property="og:url" content="https://www.kainenwhite.com/projects" /> {/* Replace with actual domain */}
        <meta property="og:image" content="https://www.kainenwhite.com/og-image-projects.png" /> {/* Replace with actual image URL */}
        <meta property="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Design Portfolio & Case Studies | Kainen White" />
        <meta name="twitter:description" content="Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results." />
        <meta name="twitter:image" content="https://www.kainenwhite.com/twitter-image-projects.png" /> {/* Replace with actual image URL */}
      </Helmet>
      <div className="non-contrast-section hero">
        <FolderOpen size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Projects</h1>
        <p>Explore my work in design and development through interactive case studies.</p>
        {/* Tab Toggle Switch */}
        <div className="projects-tab-container">
          <div className={`projects-tab-switch${activeTab === 'development' ? ' development-active' : ''}`}> 
            <button 
              className={`tab-button ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('design')}
              aria-pressed={activeTab === 'design'}
            >
              Design
            </button>
            <button 
              className={`tab-button ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('development')}
              aria-pressed={activeTab === 'development'}
            >
              Development
            </button>
            <div className="tab-animated-slider"></div>
          </div>
        </div>
      </div>
      {/* Design Projects Section */}
      {activeTab === 'design' && (
        <div className="Design contrast-section">
          <h2 className="left-right-padding">Design Projects</h2>
          <p className='left-right-padding'>User-centered design solutions focusing on research, iteration, and impact.</p>
          {/* Deck of Cards */}
          <Deck
            items={designProjects}
            actionType="caseStudy, demo"
          />
          {/* Carousel removed */}
        </div>
      )}
      {/* Development Projects Section */}
      {activeTab === 'development' && (
        <div className="Development contrast-section">
          <h2 className="left-right-padding">Development Projects</h2>
          <p className='left-right-padding'>Full-stack development work showcasing technical skills and problem-solving.</p>
          {/* Deck of Cards */}
          <Deck
            items={developmentProjects}
            actionType="github"
          />
          {/* Carousel removed */}
        </div>
      )}
    </div>
  );
}

export default Projects;
