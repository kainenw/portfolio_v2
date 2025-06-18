import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact - Kainen White',
  description: 'Get in touch with Kainen White for your next design project. Professional UX/UI design services focused on user-centered solutions and business results.',
  openGraph: {
    title: 'Contact - Kainen White',
    description: 'Get in touch with Kainen White for your next design project. Professional UX/UI design services focused on user-centered solutions and business results.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact - Kainen White',
    description: 'Get in touch with Kainen White for your next design project. Professional UX/UI design services focused on user-centered solutions and business results.',
  },
};

export default function Contact() {
  return <ContactClient />;
}
