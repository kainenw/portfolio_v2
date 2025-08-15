import type { Metadata } from 'next'
import About from '../../Pages/About/About'

export const metadata: Metadata = {
  title: 'About | Kainen White | Product & UX Designer',
  description:
    "Learn more about Kainen White's professional background, design philosophy, skills, and the services offered. Discover how user-centered design drives business growth.",
  openGraph: {
    title: 'About | Kainen White | Product & UX Designer',
    description:
      "Learn more about Kainen White's professional background, design philosophy, skills, and the services offered. Discover how user-centered design drives business growth.",
    url: 'https://www.kainenwhite.com/about',
    type: 'website',
    images: ['https://www.kainenwhite.com/headshot.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Kainen White | Product & UX Designer',
    description:
      "Learn more about Kainen White's professional background, design philosophy, skills, and the services offered. Discover how user-centered design drives business growth.",
    images: ['https://www.kainenwhite.com/headshot.webp'],
  },
}

export default function AboutPage() {
  return <About />
}
