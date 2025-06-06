import '../_Pages.css';
import React, { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import headshot from '../../img/headshot.png';

function Contact() {
  const [formStatus, setFormStatus] = useState(''); // '', 'success', 'error', 'submitting'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters long';
    return newErrors;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setFormStatus('submitting');
    setErrors({});
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData
        })
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="Contact Page">
      <div className="non-contrast-section hero">
        <Mail size={40} style={{ display: 'block', margin: '0 auto 12px' }} />
        <h1>Let&apos;s Connect!</h1>
      </div>
      <div className="contrast-section" style={{ maxWidth: 400, margin: "2rem auto" }}>
        {formStatus === 'success' && (
          <div className="form-notification success">
            <CheckCircle size={20} />
            <span>Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!</span>
          </div>
        )}
        {formStatus === 'error' && (
          <div className="form-notification error">
            <AlertCircle size={20} />
            <span>Sorry, there was an error sending your message. Please try again or email me directly.</span>
          </div>
        )}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: 'none' }}>
            <label>Don’t fill this out if you&apos;re human: <input name="bot-field" /></label>
          </p>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
              style={{ borderColor: errors.name ? '#dc3545' : undefined }}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
              style={{ borderColor: errors.email ? '#dc3545' : undefined }}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="form-input"
              style={{ borderColor: errors.message ? '#dc3545' : undefined, resize: 'vertical', minHeight: '120px' }}
            />
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="cta-btn"
            disabled={formStatus === 'submitting'}
            style={{ opacity: formStatus === 'submitting' ? 0.7 : 1, cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer' }}
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      {/* Hidden static form for Netlify build-time detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <p>I&apos;m always open to discussing new projects and opportunities.</p>
      <div className="info-group contrast-section">
        <img src={headshot} alt="Headshot of Kainen" />
        <div>
          <h3>Let&apos;s Build Something Amazing Together!</h3>
          Interested in collaborating on design-focused projects? Reach me on LinkedIn, GitHub, and Twitter. You can also reach out via email at{' '}
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
