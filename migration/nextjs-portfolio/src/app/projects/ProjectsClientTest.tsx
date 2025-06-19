'use client';

import React, { useState } from 'react';
import '../_Pages.css';
import { designProjects, developmentProjects } from '../../data/projects';
import DeckSimple from '../../components/Deck/DeckSimple';

function ProjectsClientTest() {
  const [activeTab, setActiveTab] = useState('design');

  return (
    <div className="Projects Page">
      <div className="non-contrast-section hero">
        <h1>Projects - Test Version</h1>
        <p>This is testing with real projects data.</p>
        <p>Active tab: {activeTab}</p>
        <p>Design projects: {designProjects?.length || 0}</p>
        <p>Dev projects: {developmentProjects?.length || 0}</p>
        
        <button onClick={() => setActiveTab('design')}>Design</button>
        <button onClick={() => setActiveTab('development')}>Development</button>
      </div>
      
      {activeTab === 'design' && (
        <div>
          <h2>Design Projects</h2>
          <p>Design content here</p>
        </div>
      )}
      
      {activeTab === 'development' && (
        <div>
          <h2>Development Projects</h2>
          <p>Development content here</p>
        </div>
      )}
    </div>
  );
}

export default ProjectsClientTest;
