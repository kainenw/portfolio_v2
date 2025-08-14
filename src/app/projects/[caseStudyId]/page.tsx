import CaseStudy from '../../../Pages/Projects/Case Studies/CaseStudy';
import { getProjectBySlug } from '../../../Data/projects.ts';

export default function CaseStudyPage({ params }: { params: { caseStudyId: string } }) {
  const project = getProjectBySlug(params.caseStudyId);
  if (!project) {
    return <div style={{ padding: '2rem' }}>Case study not found.</div>;
  }
  return (
    <div className="CaseStudy Page">
      <CaseStudy {...project} />
    </div>
  );
}
