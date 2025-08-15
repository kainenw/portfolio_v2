import type { Metadata } from 'next'
import Contact from '../../Pages/Contact/Contact'

export const metadata: Metadata = {
  title: 'Contact | Kainen White | Product & UX Designer',
  description:
    'Get in touch with Kainen White for your next design project. Professional UX/UI design services focused on user-centered solutions and business results.',
  openGraph: {
    title: 'Contact | Kainen White | Product & UX Designer',
    description:
      'Get in touch with Kainen White for your next design project. Professional UX/UI design services focused on user-centered solutions and business results.',
    url: 'https://www.kainenwhite.com/contact',
    type: 'website',
    images: ['https://www.kainenwhite.com/headshot.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Kainen White | Product & UX Designer',
    description:
      'Get in touch with Kainen White for your next design project. Professional UX/UI design services focused on user-centered solutions and business results.',
    images: ['https://www.kainenwhite.com/headshot.webp'],
  },
}

export default function ContactPage() {
  return <Contact />
}
