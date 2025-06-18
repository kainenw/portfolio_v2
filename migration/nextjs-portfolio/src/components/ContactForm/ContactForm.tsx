'use client';

import React, { useState } from 'react';
// CSS import removed to prevent conflicts with inline-styles version
// import './ContactForm.css';

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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus on first error field for accessibility
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const field = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        field?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // For now, simulate form submission
      // In production, this would integrate with a backend service or Netlify Forms
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or contact me directly via email.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-container" role="alert" aria-live="polite">
        <div className="success-message">
          <h3>✅ Message Sent Successfully!</h3>
          <p>Thank you for reaching out! I'll get back to you within 24 hours.</p>
          <button 
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="reset-button"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <h2 className="form-title">Get In Touch</h2>
        <p className="form-description">
          Ready to bring your ideas to life? Let's discuss your project!
        </p>

        {submitError && (
          <div className="error-banner" role="alert" aria-live="polite">
            {submitError}
          </div>
        )}

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name <span className="required" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Your full name"
          />
          {errors.name && (
            <span id="name-error" className="error-message" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span className="required" aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <span id="email-error" className="error-message" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        {/* Subject Field */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject <span className="required" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`form-input ${errors.subject ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            placeholder="What would you like to discuss?"
          />
          {errors.subject && (
            <span id="subject-error" className="error-message" role="alert">
              {errors.subject}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message <span className="required" aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="Tell me about your project, timeline, and any specific requirements..."
          />
          {errors.message && (
            <span id="message-error" className="error-message" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`submit-button ${isSubmitting ? 'loading' : ''}`}
          aria-describedby="submit-help"
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner" aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            <>
              📤 Send Message
            </>
          )}
        </button>
        
        <p id="submit-help" className="submit-help">
          All fields marked with * are required
        </p>
      </form>
    </div>
  );
}
