import type { Metadata } from 'next'
import Projects from '../../Pages/Projects/Projects'

export const metadata: Metadata = {
  title: 'Design Portfolio & Case Studies | Kainen White | Product & UX Designer',
  description:
    'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
  openGraph: {
    title: 'Design Portfolio & Case Studies | Kainen White | Product & UX Designer',
    description:
      'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
    url: 'https://www.kainenwhite.com/projects',
    type: 'website',
    images: ['https://www.kainenwhite.com/headshot.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Portfolio & Case Studies | Kainen White | Product & UX Designer',
    description:
      'Explore a collection of detailed UX/UI design case studies from Kainen White, showcasing a rigorous process and measurable business results.',
    images: ['https://www.kainenwhite.com/headshot.webp'],
  },
}

export default function ProjectsPage() {
  return <Projects />
}
