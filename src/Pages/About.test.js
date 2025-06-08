import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import About from './About/About'; // Changed import path

describe('About', () => {
  const renderAbout = () => {
    render(
      <HelmetProvider>
        <About />
      </HelmetProvider>
    );
  };

  it('renders the About page with key sections', () => {
    act(() => {
      renderAbout();
    });
    expect(screen.getByText(/Design With Purpose/i)).toBeInTheDocument();
    expect(screen.getByText(/User-centered thinking meets measurable impact/i)).toBeInTheDocument();
    expect(screen.getByText(/Services I Offer/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills:/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience:/i)).toBeInTheDocument();
    expect(screen.getByText(/I'm Kainen/i)).toBeInTheDocument();
  });

  it('renders the Start a Project button', () => {
    act(() => {
      renderAbout();
    });
    expect(screen.getAllByRole('button', { name: /start a project/i })[0]).toBeInTheDocument();
  });

  it('opens the modal with contact form when Start a Project is clicked', () => {
    act(() => {
      renderAbout();
    });
    act(() => {
      const startProjectButtons = screen.getAllByRole('button', { name: /start a project/i });
      fireEvent.click(startProjectButtons[0]);
    });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument();
  });

  it('closes the modal when overlay is clicked', () => {
    act(() => {
      renderAbout();
    });
    act(() => {
      const startProjectButtons = screen.getAllByRole('button', { name: /start a project/i });
      fireEvent.click(startProjectButtons[0]);
    });
    // Click the overlay (button element with "Close modal by clicking outside" label)
    act(() => {
      fireEvent.click(screen.getByLabelText(/close modal by clicking outside/i));
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when close button is clicked', () => {
    act(() => {
      renderAbout();
    });
    act(() => {
      const startProjectButtons = screen.getAllByRole('button', { name: /start a project/i });
      fireEvent.click(startProjectButtons[0]);
    });
    // Get the close button specifically with aria-label="Close"
    const closeBtn = screen.getByRole('button', { name: 'Close' });
    act(() => {
      fireEvent.click(closeBtn);
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
