import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Design Portfolio & Case Studies - Kainen White',
  description: 'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
  openGraph: {
    title: 'Design Portfolio & Case Studies - Kainen White',
    description: 'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Portfolio & Case Studies - Kainen White',
    description: 'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
