import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  article = null,
  project = null
}) => {
  const siteTitle = 'Kainen White | Product & UX Designer';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth.';
  const pageDescription = description || defaultDescription;
  const defaultImage = 'https://kainenwhite.com/headshot.webp';
  const pageImage = image || defaultImage;
  const siteUrl = 'https://kainenwhite.com';
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Generate structured data based on page type
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "headline": title,
      "description": pageDescription,
      "image": pageImage,
      "url": pageUrl,
      "author": {
        "@type": "Person",
        "name": "Kainen White",
        "jobTitle": "Product & UX Designer"
      }
    };

    if (type === 'article' && article) {
      return {
        ...baseData,
        "@type": "Article",
        "datePublished": article.datePublished,
        "dateModified": article.dateModified || article.datePublished,
        "publisher": {
          "@type": "Person",
          "name": "Kainen White"
        }
      };
    }

    if (type === 'project' && project) {
      return {
        ...baseData,
        "@type": "CreativeWork",
        "creator": {
          "@type": "Person",
          "name": "Kainen White"
        },
        "dateCreated": project.dateCreated,
        "keywords": project.technologies?.join(', '),
        "genre": "UX Design"
      };
    }

    return {
      ...baseData,
      "@type": "WebPage"
    };
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kainen White Portfolio" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={title || "Kainen White - Product & UX Designer"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
      
      {/* Article-specific meta tags */}
      {type === 'article' && article && (
        <>
          <meta property="article:author" content="Kainen White" />
          <meta property="article:published_time" content={article.datePublished} />
          {article.dateModified && (
            <meta property="article:modified_time" content={article.dateModified} />
          )}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
};

export default SEO;
