import '../_Pages.css';
import React, { useState } from "react";
import { Mail } from 'lucide-react';
import headshot from '../../img/headshot.png';

function Contact() {
  const [formStatus, setFormStatus] = useState(''); // 'success' or ''

  // Netlify will redirect to ?success=true on success if configured
  React.useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setFormStatus('success');
    }
  }, []);

  return (
    <div className="Contact Page">
      <div className="non-contrast-section hero">
        <Mail size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Let&apos;s Connect!</h1>
      </div>
      <div className="contrast-section" style={{ maxWidth: 400, margin: "2rem auto" }}>
        {formStatus === 'success' && (
          <div className="form-notification success">
            <span>Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!</span>
          </div>
        )}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/contact?success=true"
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {/* Honeypot field for bots */}
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: 'none' }}>
            <label>Don’t fill this out if you&apos;re human: <input name="bot-field" /></label>
          </p>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="form-input"
              style={{ resize: 'vertical', minHeight: '120px' }}
            />
          </div>
          <button 
            type="submit"
            className="cta-btn"
          >
            Send Message
          </button>
        </form>
      </div>
      <p>I&apos;m always open to discussing new projects and opportunities.</p>
      <div className="info-group contrast-section">
        <img src={headshot} alt="Headshot of Kainen" />
        <div>
          <h3>Let&apos;s Build Something Amazing Together!</h3>
            Interested in collaborating on design-focused projects? Reach me on LinkedIn, GitHub,
            and Twitter. You can also reach out via email at{' '}
            <a href="mailto:kainen.white@gmail.com">kainen.white@gmail.com</a>
        </div>
      </div>
      <div className="non-contrast-section">
        <p>Thank you for visiting my portfolio! I&apos;m excited to continue learning and growing in the field.</p>
      </div>
    </div>
  );
}

export default Contact;
