import CaseStudyClient from './CaseStudyClient';
import generateSEOMetadata from '../../../Components/SEO/generateMetadata';
import { getProjectBySlug } from '../../../Data/projects';

export function generateMetadata({ params }) {
  const slugFromUrl = params.slug.split('-case-study')[0];
  const project = getProjectBySlug(slugFromUrl);
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'Case study not found.'
    };
  }
  return generateSEOMetadata({
    title: project.title,
    description: project.description || project.longDescription || `A detailed case study of ${project.title}, showcasing the design process and measurable results.`,
    url: `/projects/${project.title?.toLowerCase().replace(/\s+/g, '-')}`,
    type: 'article',
    image: project.images?.[0] || project.image,
    article: {
      datePublished: '2024-01-01',
      tags: project.technologies || []
    }
  });
}

export default function CaseStudyPage({ params }) {
  return <CaseStudyClient slug={params.slug} />;
}
