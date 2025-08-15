import type { Metadata } from 'next'
import Homepage from '../Pages/Home/Homepage'

export const metadata: Metadata = {
  title: 'Kainen White | Product & UX Designer',
  description:
    'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.',
  openGraph: {
    title: 'Kainen White | Product & UX Designer',
    description:
      'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.',
    url: 'https://www.kainenwhite.com/',
    images: ['https://www.kainenwhite.com/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kainen White | Product & UX Designer',
    description:
      'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.',
    images: ['https://www.kainenwhite.com/twitter-image.png'],
  },
}

export default function Page() {
  return <Homepage />
}
