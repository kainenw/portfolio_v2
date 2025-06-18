import { Metadata } from 'next';
import ContactForm from './ContactForm';

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
  return (
    <div className="contact-page">
      <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '2rem 0' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--text-color)',
            marginBottom: '1rem'
          }}>
            Let's Connect!
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-color)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
        
        {/* Additional Contact Info */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'var(--page-background)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-color)',
            marginBottom: '1.5rem'
          }}>
            Other Ways to Reach Me
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📧</span>
              <a 
                href="mailto:hello@kainenwhite.com" 
                style={{
                  color: 'var(--accent-color)',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                hello@kainenwhite.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>💼</span>
              <a 
                href="https://linkedin.com/in/kainenwhite" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--accent-color)',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                LinkedIn
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📍</span>
              <span style={{ color: 'var(--text-color)' }}>
                San Francisco Bay Area
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
