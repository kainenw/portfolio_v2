"use client";

// Import the About component from the uppercase folder
import AboutComponent from '../About/page';

export const metadata = {
  title: "About Kainen White",
  description: "Learn more about Kainen White, a product and UX designer creating user-centered digital experiences."
};

export default function AboutPage() {
  return <AboutComponent />;
}
