// FILE: app/page.jsx
// PURPOSE: The content for the homepage ONLY. All global logic is removed.

import type { Metadata } from "next";
import themeStyles from "../Theme/themeStyles"; // Adjust path if needed

// This metadata is specific to this page and will override the layout's metadata.
export const metadata: Metadata = {
    title: "Kainen White | Product & UX Designer",
    description: "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
    openGraph: {
        title: "Kainen White | Product & UX Designer",
        description: "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
        type: "website",
        url: "https://kainenwhite.com",
        images: [{
            url: "https://kainenwhite.com/headshot.webp",
            width: 1200,
            height: 630,
        }],
        siteName: "Kainen White Portfolio",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kainen White | Product & UX Designer",
        description: "The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies.",
        images: ["https://kainenwhite.com/headshot.webp"],
    },
    authors: [{ name: 'Kainen White' }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://kainenwhite.com',
    },
};


// This is your homepage component. It no longer needs to be a client component.
export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kainen White",
    "jobTitle": "Product & UX Designer",
    "description": "Product and UX designer creating user-centered digital experiences that drive business growth",
    "url": "https://kainenwhite.com",
    "image": "https://kainenwhite.com/headshot.webp",
    "sameAs": [
      "https://www.linkedin.com/in/kainenwhite",
      "https://github.com/kainenwhite"
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kainen White Portfolio",
    "url": "https://kainenwhite.com",
    "author": {
      "@type": "Person",
      "name": "Kainen White"
    },
  };

  return (
    <div className="home-page-container">
      {/* Script tags for JSON-LD schema are placed directly in the JSX */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* YOUR HOME PAGE CONTENT GOES HERE. */}
      {/* For example: <HeroSection />, <ProjectsList />, etc. */}
      
    </div>
  );
}