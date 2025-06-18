import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudy from './CaseStudy';
import { getProjectBySlug } from '../../../Data/projects.ts';

function CaseStudyWrapper() {
  const { caseStudyId } = useParams();
  // Use the new getProjectBySlug function with the URL parameter
  const project = getProjectBySlug(caseStudyId);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Case study not found.</div>;
  }

  // Pass all project data as props to CaseStudy, wrapped in Page container for consistent layout
  return (
    <div className="CaseStudy Page">
      <CaseStudy {...project} />
    </div>
  );
}

export default CaseStudyWrapper;
