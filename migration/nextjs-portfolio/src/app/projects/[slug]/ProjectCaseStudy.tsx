'use client';

import CaseStudy from '../../../components/CaseStudy/CaseStudy';
import { Project } from '../../../data/projects';

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return <CaseStudy {...project} />;
}
