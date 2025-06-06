import React, { useState } from 'react';
import '../_Pages.css';
import Deck from '../../Components/Deck/Deck';
import { FolderOpen } from 'lucide-react';
import { designProjects, developmentProjects } from '../projectsData';

function Projects() {
  const [activeTab, setActiveTab] = useState('design');

  const handleTabSwitch = tab => setActiveTab(tab);

  return (
    <div className="Projects Page">
      <div className="non-contrast-section hero">
        <FolderOpen size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Projects</h1>
        <p>Explore my work in design and development through interactive case studies.</p>
        {/* Tab Toggle Switch */}
        <div className="projects-tab-container">
          <div className="projects-tab-switch">
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
            <div className={`tab-slider ${activeTab === 'development' ? 'right' : 'left'}`}></div>
          </div>
        </div>
      </div>
      {/* Design Projects Section */}
      {activeTab === 'design' && (
        <div className="Design contrast-section no-side-padding">
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
        <div className="Development contrast-section no-side-padding">
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
