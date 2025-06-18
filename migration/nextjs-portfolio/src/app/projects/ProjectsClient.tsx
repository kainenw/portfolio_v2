'use client';

import React from 'react';
import Deck from '../../components/Deck/Deck';
import { projects } from '../../data/projects';

function ProjectsClient() {
  // Filter projects by category
  const designProjects = projects.filter(project => project.category === 'design');
  const developmentProjects = projects.filter(project => project.category === 'development');

  return (
    <div className="projects-page">
      <div style={{ padding: '2rem 0' }}>
        {/* Design Projects Section */}
        <Deck
          title="UX Design Case Studies"
          description="Detailed case studies showcasing user-centered design solutions that drive measurable business results. Each project demonstrates the complete design process from research to implementation."
          items={designProjects.map(project => ({
            id: project.id,
            title: project.title,
            description: project.description,
            slug: project.slug,
            image: project.thumbnail || project.image,
            images: project.images,
            links: project.links
          }))}
          actionType="caseStudy, demo"
          analytics={{
            category: 'Projects',
            action: 'View Design Portfolio'
          }}
        />

        {/* Development Projects Section */}
        <div style={{ marginTop: '4rem' }}>
          <Deck
            title="Development Projects"
            description="Technical projects showcasing frontend development skills, accessibility implementation, and modern web technologies. Each project emphasizes clean code, performance, and user experience."
            items={developmentProjects.map(project => ({
              id: project.id,
              title: project.title,
              description: project.description,
              slug: project.slug,
              image: project.thumbnail || project.image,
              images: project.images,
              links: project.links
            }))}
            actionType="demo, github"
            analytics={{
              category: 'Projects',
              action: 'View Development Portfolio'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsClient;