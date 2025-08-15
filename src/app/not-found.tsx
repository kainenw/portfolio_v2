import type { Metadata } from 'next'
import NotFound from '../Pages/NotFound/NotFound'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Kainen White | Product & UX Designer',
  description:
    "The page you're looking for doesn't exist. Explore other sections of Kainen White's portfolio.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 - Page Not Found | Kainen White | Product & UX Designer',
    description:
      "The page you're looking for doesn't exist. Explore other sections of Kainen White's portfolio.",
    url: 'https://www.kainenwhite.com/404',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '404 - Page Not Found | Kainen White | Product & UX Designer',
    description:
      "The page you're looking for doesn't exist. Explore other sections of Kainen White's portfolio.",
  },
}

export default function NotFoundPage() {
  return <NotFound />
}
