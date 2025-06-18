import { Metadata } from 'next';
import React from 'react';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About - Kainen White',
  description: 'Learn more about Kainen White\'s professional background, design philosophy, skills, and the services offered. Discover how user-centered design drives business growth.',
  openGraph: {
    title: 'About - Kainen White',
    description: 'Learn more about Kainen White\'s professional background, design philosophy, skills, and the services offered. Discover how user-centered design drives business growth.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Kainen White',
    description: 'Learn more about Kainen White\'s professional background, design philosophy, skills, and the services offered. Discover how user-centered design drives business growth.',
  },
};

export default function About() {
  return <AboutClient />;
}
