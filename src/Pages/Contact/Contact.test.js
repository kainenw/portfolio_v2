import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { MemoryRouter } from 'react-router-dom'
import Contact from './Contact'
import userEvent from '@testing-library/user-event';
import * as emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser');

describe('Contact', () => {
  it('renders the Contact page with key sections', () => {
    act(() => {
      render(
        <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Contact />
        </MemoryRouter>
      )
    })
    expect(screen.getByText(/Let's Connect!/i)).toBeInTheDocument()
    expect(screen.getByText(/Thank you for visiting my portfolio!/i)).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', async () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Contact />
      </MemoryRouter>
    );
    
    await act(async () => {
      userEvent.click(screen.getByRole('button', { name: /send message/i }));
    });
    
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it('shows validation error for invalid email', async () => {
    render(
      <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
        <Contact />
      </MemoryRouter>
    );
    
    await act(async () => {
      userEvent.type(screen.getByPlaceholderText(/your name/i), 'Test User');
      userEvent.type(screen.getByPlaceholderText(/your email/i), 'invalid-email');
      userEvent.type(screen.getByPlaceholderText(/your message/i), 'A valid message here.');
      userEvent.click(screen.getByRole('button', { name: /send message/i }));
    });
    
    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument();
  });

  it('submits the form and shows success message on EmailJS success', async () => {
    emailjs.send.mockResolvedValueOnce({ status: 200 });
    render(
      <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
        <Contact />
      </MemoryRouter>
    );
    
    await act(async () => {
      userEvent.type(screen.getByPlaceholderText(/your name/i), 'Test User');
      userEvent.type(screen.getByPlaceholderText(/your email/i), 'test@example.com');
      userEvent.type(screen.getByPlaceholderText(/your message/i), 'A valid message here.');
      userEvent.click(screen.getByRole('button', { name: /send message/i }));
    });
    
    expect(await screen.findByText(/your message has been sent successfully/i)).toBeInTheDocument();
  });

  it('shows error message on EmailJS failure', async () => {
    emailjs.send.mockRejectedValueOnce(new Error('Email failed'));
    render(
      <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
        <Contact />
      </MemoryRouter>
    );
    
    await act(async () => {
      userEvent.type(screen.getByPlaceholderText(/your name/i), 'Test User');
      userEvent.type(screen.getByPlaceholderText(/your email/i), 'test@example.com');
      userEvent.type(screen.getByPlaceholderText(/your message/i), 'A valid message here.');
      userEvent.click(screen.getByRole('button', { name: /send message/i }));
    });
    
    expect(await screen.findByText(/error sending your message/i)).toBeInTheDocument();
  });
})
