'use client';

import React from 'react';
import { projects } from '../../data/projects';

export default function Projects() {
  // Add safety checks for data
  if (!projects || !Array.isArray(projects)) {
    return (
      <div className="projects-page">
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Projects</h1>
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  // Filter projects by category with safety checks
  const designProjects = projects.filter(project => project && project.category === 'design') || [];
  const developmentProjects = projects.filter(project => project && project.category === 'development') || [];

  return (
    <div className="projects-page">
      <div style={{ padding: '2rem 0' }}>
        {/* Page Header */}
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
            Projects
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem', 
            maxWidth: '600px', 
            margin: '0 auto', 
            color: 'var(--text-color)' 
          }}>
            Explore my UX design case studies and development projects showcasing user-centered solutions and technical expertise.
          </p>
        </section>

        {/* Enhanced Projects Display with 5 key props concept */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Design Projects Section */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
              UX Design Case Studies
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-secondary, #616161)' }}>
              Detailed case studies showcasing user-centered design solutions that drive measurable business results. Each project demonstrates the complete design process from research to implementation.
            </p>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '3rem', 
              padding: '1rem', 
              backgroundColor: 'var(--card-background)', 
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              maxWidth: '600px',
              margin: '1rem auto 3rem auto'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                📚 <strong>Case Study Details:</strong> Full case studies with interactive prototypes, user research insights, and detailed design process documentation are currently being migrated to the new platform. Contact me for access to complete case studies.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {designProjects.map(project => (
                <article key={project.id} style={{ 
                  border: '1px solid #e0e0e0', 
                  borderRadius: '12px', 
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}>
                  {project.thumbnail && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <img 
                        src={project.thumbnail} 
                        alt={`${project.title} preview`}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a' }}>
                    {project.title}
                  </h3>
                  <p style={{ marginBottom: '1.5rem', color: '#666', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {project.slug && (
                      <a 
                        href={`/projects/${project.slug}`}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#007acc',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          fontSize: '0.9rem'
                        }}
                      >
                        View Case Study
                      </a>
                    )}
                    {project.links?.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#28a745',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          fontSize: '0.9rem'
                        }}
                      >
                        View Demo
                      </a>
                    )}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #767676)', marginTop: '1rem' }}>
                    <strong>Role:</strong> {project.role}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Development Projects Section */}
          <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
              Development Projects
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
              Technical projects showcasing frontend development skills, accessibility implementation, and modern web technologies. Each project emphasizes clean code, performance, and user experience.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {developmentProjects.map(project => (
                <article key={project.id} style={{ 
                  border: '1px solid #e0e0e0', 
                  borderRadius: '12px', 
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}>
                  {project.thumbnail && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <img 
                        src={project.thumbnail} 
                        alt={`${project.title} preview`}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a' }}>
                    {project.title}
                  </h3>
                  <p style={{ marginBottom: '1.5rem', color: '#666', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {project.links?.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#28a745',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          fontSize: '0.9rem'
                        }}
                      >
                        View Demo
                      </a>
                    )}
                    {project.links?.repository && (
                      <a 
                        href={project.links.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#333',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          fontSize: '0.9rem'
                        }}
                      >
                        View Code
                      </a>
                    )}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary, #767676)', marginTop: '1rem' }}>
                    <strong>Role:</strong> {project.role}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
