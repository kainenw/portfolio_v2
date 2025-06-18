import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kainen White | Product & UX Designer',
  description: 'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.',
  openGraph: {
    title: 'Kainen White | Product & UX Designer',
    description: 'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.',
    url: 'https://kainenwhite.com/',
    images: [
      {
        url: 'https://kainenwhite.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kainen White - Product & UX Designer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kainen White | Product & UX Designer',
    description: 'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.',
    images: ['https://kainenwhite.com/twitter-image.png'],
  },
};

export default function Home() {
  return (
    <div className="homepage">
      <div className="non-contrast-section hero">
        <h1>Kainen White</h1>
        <p>Product & UX Designer creating user-centered digital experiences.</p>
      </div>
    </div>
  );
}
