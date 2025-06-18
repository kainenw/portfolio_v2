import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Project Not Found
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '500px' }}>
        The project case study you're looking for doesn't exist or may have been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link 
          href="/projects" 
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
        >
          View All Projects
        </Link>
        <Link 
          href="/" 
          style={{
            padding: '0.75rem 1.5rem',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
