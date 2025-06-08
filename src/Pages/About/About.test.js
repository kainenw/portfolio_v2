import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import About from './About'

describe('About', () => {
  it('renders the About page with key sections', () => {
    act(() => {
      render(
        <HelmetProvider> {/* Wrap with HelmetProvider */}
          <MemoryRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <About />
          </MemoryRouter>
        </HelmetProvider>
      )
    })
    expect(screen.getByText(/Design With Purpose/i)).toBeInTheDocument()
    expect(screen.getByText(/User-centered thinking meets measurable impact/i)).toBeInTheDocument()
    expect(screen.getByText(/My Work/i)).toBeInTheDocument()
    expect(screen.getByText(/Skills:/i)).toBeInTheDocument()
    expect(screen.getByText(/Experience:/i)).toBeInTheDocument()
    expect(screen.getByText(/I'm Kainen/i)).toBeInTheDocument()
  })

  it('renders the Start a Project button', () => {
    act(() => {
      render(
        <HelmetProvider> {/* Wrap with HelmetProvider */}
          <MemoryRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <About />
          </MemoryRouter>
        </HelmetProvider>
      )
    })
    expect(screen.getAllByRole('button', { name: /start a project/i })[0]).toBeInTheDocument()
  })

  it('opens the modal with contact form when Start a Project is clicked', () => {
    act(() => {
      render(
        <HelmetProvider> {/* Wrap with HelmetProvider */}
          <MemoryRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <About />
          </MemoryRouter>
        </HelmetProvider>
      )
    })
    act(() => {
      // Get the first "Start a Project" button (should be in the hero section)
      const startProjectButtons = screen.getAllByRole('button', { name: /start a project/i });
      fireEvent.click(startProjectButtons[0]);
    });
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument()
  })

  it('closes the modal when overlay is clicked', () => {
    act(() => {
      render(
        <HelmetProvider> {/* Wrap with HelmetProvider */}
          <MemoryRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <About />
          </MemoryRouter>
        </HelmetProvider>
      )
    })
    act(() => {
      // Get the first "Start a Project" button (should be in the hero section)
      const startProjectButtons = screen.getAllByRole('button', { name: /start a project/i });
      fireEvent.click(startProjectButtons[0]);
    });
    // Click the overlay (not the dialog)
    const overlay = screen.getByRole('button', { name: /close modal by clicking outside/i })
    act(() => {
      fireEvent.click(overlay)
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal when close button is clicked', () => {
    act(() => {
      render(
        <HelmetProvider> {/* Wrap with HelmetProvider */}
          <MemoryRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <About />
          </MemoryRouter>
        </HelmetProvider>
      )
    })
    act(() => {
      // Get the first "Start a Project" button (should be in the hero section)
      const startProjectButtons = screen.getAllByRole('button', { name: /start a project/i });
      fireEvent.click(startProjectButtons[0]);
    });
    // Only select the close button inside the dialog
    const dialog = screen.getByRole('dialog')
    const closeBtn = screen.getByRole('button', { name: /^close$/i, hidden: true })
    act(() => {
      fireEvent.click(closeBtn)
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
