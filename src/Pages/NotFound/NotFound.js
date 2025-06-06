import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import '../_Pages.css';

function NotFound() {
  return (
    <div className="NotFound Page">
      <div className="non-contrast-section" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <AlertCircle size={64} style={{ color: 'var(--accent-color, #007acc)', margin: '0 auto 2rem' }} />
        
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-color, #007acc)' }}>
          404
        </h1>
        
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Page Not Found
        </h2>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Home size={20} />
            Go Home
          </Link>
          
          <Link to="/projects" className="cta-btn" style={{ background: 'transparent', color: 'var(--accent-color, #007acc)', border: '2px solid var(--accent-color, #007acc)' }}>
            View Projects
          </Link>
          
          <Link to="/contact" className="cta-btn" style={{ background: 'transparent', color: 'var(--accent-color, #007acc)', border: '2px solid var(--accent-color, #007acc)' }}>
            Contact Me
          </Link>
        </div>
      </div>
      
      <div className="contrast-section" style={{ textAlign: 'center' }}>
        <h3>Looking for something specific?</h3>
        <p>Here are some helpful links to get you back on track:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '800px', margin: '2rem auto' }}>
          <Link to="/" style={{ 
            padding: '1rem', 
            background: 'var(--card-background, #fff)', 
            border: '1px solid var(--border-color, #e0e0e0)', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            color: 'inherit',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: 'var(--accent-color, #007acc)' }}>Homepage</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Start your journey here</p>
          </Link>
          
          <Link to="/about" style={{ 
            padding: '1rem', 
            background: 'var(--card-background, #fff)', 
            border: '1px solid var(--border-color, #e0e0e0)', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            color: 'inherit',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: 'var(--accent-color, #007acc)' }}>About Me</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Learn about my background</p>
          </Link>
          
          <Link to="/projects" style={{ 
            padding: '1rem', 
            background: 'var(--card-background, #fff)', 
            border: '1px solid var(--border-color, #e0e0e0)', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            color: 'inherit',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: 'var(--accent-color, #007acc)' }}>Projects</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>View my portfolio work</p>
          </Link>
          
          <Link to="/contact" style={{ 
            padding: '1rem', 
            background: 'var(--card-background, #fff)', 
            border: '1px solid var(--border-color, #e0e0e0)', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            color: 'inherit',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: 'var(--accent-color, #007acc)' }}>Contact</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Get in touch with me</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
