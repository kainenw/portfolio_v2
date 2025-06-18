'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters: any) => void;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'' | 'success' | 'error' | 'submitting'>('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setFormStatus('submitting');
    setErrors({});
    
    try {
      // Track form submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form'
        });
      }
      
      // Simulate form submission (replace with actual EmailJS or API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <div style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        background: '#f0fff4',
        border: '1px solid #9ae6b4',
        borderRadius: '12px',
        color: '#22543d'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#22543d' }}>
          Message Sent Successfully!
        </h3>
        <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
          Thank you for reaching out! I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setFormStatus('')}
          style={{
            padding: '0.5rem 1rem',
            background: 'transparent',
            color: '#22543d',
            border: '2px solid #22543d',
            borderRadius: '6px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Name Field */}
        <div>
          <label 
            htmlFor="name"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-color)'
            }}
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `2px solid ${errors.name ? '#e53e3e' : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontSize: '1rem',
              backgroundColor: 'var(--page-background)',
              color: 'var(--text-color)'
            }}
          />
          {errors.name && (
            <div 
              id="name-error" 
              role="alert"
              style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}
            >
              {errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label 
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-color)'
            }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={errors.email ? 'true' : 'false'}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `2px solid ${errors.email ? '#e53e3e' : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontSize: '1rem',
              backgroundColor: 'var(--page-background)',
              color: 'var(--text-color)'
            }}
          />
          {errors.email && (
            <div 
              id="email-error" 
              role="alert"
              style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}
            >
              {errors.email}
            </div>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label 
            htmlFor="subject"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-color)'
            }}
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            aria-invalid={errors.subject ? 'true' : 'false'}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `2px solid ${errors.subject ? '#e53e3e' : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontSize: '1rem',
              backgroundColor: 'var(--page-background)',
              color: 'var(--text-color)'
            }}
          />
          {errors.subject && (
            <div 
              id="subject-error" 
              role="alert"
              style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}
            >
              {errors.subject}
            </div>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label 
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-color)'
            }}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={errors.message ? 'true' : 'false'}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `2px solid ${errors.message ? '#e53e3e' : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontSize: '1rem',
              backgroundColor: 'var(--page-background)',
              color: 'var(--text-color)',
              resize: 'vertical',
              minHeight: '120px'
            }}
          />
          {errors.message && (
            <div 
              id="message-error" 
              role="alert"
              style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}
            >
              {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          style={{
            padding: '0.875rem 1.5rem',
            backgroundColor: formStatus === 'submitting' ? '#a0aec0' : 'var(--accent-color)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          {formStatus === 'submitting' ? '📤 Sending...' : '📧 Send Message'}
        </button>

        {/* Error Message */}
        {formStatus === 'error' && (
          <div 
            role="alert"
            style={{
              padding: '1rem',
              backgroundColor: '#fed7d7',
              border: '1px solid #feb2b2',
              borderRadius: '8px',
              color: '#742a2a'
            }}
          >
            ❌ There was an error sending your message. Please try again or contact me directly at hello@kainenwhite.com
          </div>
        )}
      </form>
    </div>
  );
}