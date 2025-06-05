import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudy from './CaseStudy';
import { designProjects, developmentProjects } from './Projects';

// Combine only projects with full data for lookup
const allProjects = [
  ...(Array.isArray(designProjects) ? designProjects : []),
  ...(Array.isArray(developmentProjects) ? developmentProjects : [])
];

function CaseStudyWrapper() {
  const { caseStudyId } = useParams();
  // Find the project whose caseStudy link matches the current path
  const project = allProjects.find(
    p => p.links && p.links.caseStudy && p.links.caseStudy.endsWith(caseStudyId)
  );

  if (!project) {
    return <div style={{ padding: '2rem' }}>Case study not found.</div>;
  }

  // Pass all project data as props to CaseStudy
  return <CaseStudy {...project} />;
}

export default CaseStudyWrapper;
