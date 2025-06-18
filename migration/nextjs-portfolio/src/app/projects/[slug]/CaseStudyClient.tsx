'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '../../../data/projects';

interface CaseStudyClientProps {
  project: Project;
}

function CaseStudyClient({ project }: CaseStudyClientProps) {
  return (
    <div className="case-study">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/projects" style={{ color: '#007acc', textDecoration: 'none' }}>
            ← Back to Projects
          </Link>
        </div>

        {/* Header */}
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a1a' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: '1.6' }}>
            {project.longDescription}
          </p>
          
          {/* Project Meta */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem', 
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <div>
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.5rem' }}>
                Role
              </h3>
              <p style={{ margin: 0, color: '#1a1a1a' }}>{project.role}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.5rem' }}>
                Year
              </h3>
              <p style={{ margin: 0, color: '#1a1a1a' }}>{project.year}</p>
            </div>
            {project.client && (
              <div>
                <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.5rem' }}>
                  Client
                </h3>
                <p style={{ margin: 0, color: '#1a1a1a' }}>{project.client}</p>
              </div>
            )}
            <div>
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.5rem' }}>
                Technologies
              </h3>
              <p style={{ margin: 0, color: '#1a1a1a' }}>{project.technologies.join(', ')}</p>
            </div>
          </div>
        </header>

        {/* Problem Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>
            The Challenge
          </h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
            {Array.isArray(project.problem) ? (
              project.problem.map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
              ))
            ) : (
              <p>{project.problem}</p>
            )}
          </div>
        </section>

        {/* Solution Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>
            The Solution
          </h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#333' }}>
            {Array.isArray(project.solution) ? (
              project.solution.map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
              ))
            ) : (
              <p>{project.solution}</p>
            )}
          </div>
        </section>

        {/* Impact Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>
            Impact & Results
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {project.impact.map((item, index) => (
              <div key={index} style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007acc', marginBottom: '0.5rem' }}>
                  {item.value}
                </div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  {item.metric}
                </h3>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link 
            href="/projects" 
            style={{ 
              padding: '0.75rem 2rem',
              backgroundColor: '#f8f9fa',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: '4px',
              border: '1px solid #e9ecef'
            }}
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyClient;
