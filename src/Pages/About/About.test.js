import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from './About';

describe('About', () => {
  const renderAbout = () => {
    render(
      <HelmetProvider>
        <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <About />
        </MemoryRouter>
      </HelmetProvider>
    );
  };

  it('renders the About page with key sections', () => {
    act(() => {
      renderAbout();
    });
    expect(screen.getByText(/Design With Purpose/i)).toBeInTheDocument();
    expect(screen.getByText(/User-centered thinking meets measurable impact/i)).toBeInTheDocument();
    expect(screen.getByText(/My Work/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills:/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience:/i)).toBeInTheDocument();
    expect(screen.getByText(/I'm Kainen/i)).toBeInTheDocument();
  });

  it('renders the Start a Project button', () => {
    act(() => {
      renderAbout();
    });
    // Support both getByRole and getAllByRole for robustness
    const btn = screen.queryByRole('button', { name: /start a project/i }) || screen.getAllByRole('button', { name: /start a project/i })[0];
    expect(btn).toBeInTheDocument();
  });

  it('opens the modal with contact form when Start a Project is clicked', () => {
    act(() => {
      renderAbout();
    });
    act(() => {
      // Support both getByRole and getAllByRole for robustness
      const btn = screen.queryByRole('button', { name: /start a project/i }) || screen.getAllByRole('button', { name: /start a project/i })[0];
      fireEvent.click(btn);
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
      const btn = screen.queryByRole('button', { name: /start a project/i }) || screen.getAllByRole('button', { name: /start a project/i })[0];
      fireEvent.click(btn);
    });
    // Click the overlay (button element with "Close modal by clicking outside" label)
    const overlay = screen.getByLabelText(/close modal by clicking outside/i);
    act(() => {
      fireEvent.click(overlay);
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when close button is clicked', () => {
    act(() => {
      renderAbout();
    });
    act(() => {
      const btn = screen.queryByRole('button', { name: /start a project/i }) || screen.getAllByRole('button', { name: /start a project/i })[0];
      fireEvent.click(btn);
    });
    // Get the close button specifically with aria-label="Close"
    const closeBtn = screen.getByRole('button', { name: /^close$/i });
    act(() => {
      fireEvent.click(closeBtn);
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
