import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../../../data/projects';
import ProjectCaseStudy from './ProjectCaseStudy';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Kainen White`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Kainen White`,
      description: project.description,
      type: 'article',
      images: project.thumbnail ? [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Kainen White`,
      description: project.description,
      images: project.thumbnail ? [project.thumbnail] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
