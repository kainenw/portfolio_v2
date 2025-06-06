import '../_Pages.css';
import React from "react";
import { Mail } from 'lucide-react';
import headshot from '../../img/headshot.png';

function Contact() {
  return (
    <div className="Contact Page">
      <div className="non-contrast-section hero">
        <Mail size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Let&apos;s Connect!</h1>
      </div>
      <div className="contrast-section" style={{ maxWidth: 400, margin: "2rem auto" }}>
        <form
          action="mailto:kainen.white@gmail.com"
          method="POST"
          encType="text/plain"
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
          <input
            name="name"
            placeholder="Your Name"
            required
            />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            />
          <button type="submit">Send</button>
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
