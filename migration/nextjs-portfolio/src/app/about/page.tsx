import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Kainen White',
  description: 'Learn about Kainen White, a product and UX designer with expertise in user-centered design, prototyping, and creating measurable business impact.',
};

export default function About() {
  return (
    <div className="About Page">
      <section className="hero non-contrast-section" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
          About Me
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-color)' }}>
          I&apos;m a passionate product and UX designer focused on creating user-centered digital experiences that drive business growth.
        </p>
      </section>

      <section className="contrast-section" style={{ padding: '4rem 2rem', margin: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-color)' }}>
          Services I Offer
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ padding: '2rem', border: '1px solid var(--secondary-accent)', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>UX/UI Design</h3>
            <p style={{ color: 'var(--text-color)' }}>User research, wireframing, prototyping, and visual design that creates intuitive and engaging experiences.</p>
          </div>
          <div style={{ padding: '2rem', border: '1px solid var(--secondary-accent)', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Frontend Development</h3>
            <p style={{ color: 'var(--text-color)' }}>Responsive, accessible websites and applications built with modern technologies and best practices.</p>
          </div>
          <div style={{ padding: '2rem', border: '1px solid var(--secondary-accent)', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Design Consultation</h3>
            <p style={{ color: 'var(--text-color)' }}>Strategic guidance to improve your digital presence and user experience through expert analysis and recommendations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
