import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import App from './App'

describe('App', () => {
  it('renders without crashing and shows header', () => {
    act(() => {
      render(
        <HelmetProvider> {/* Add HelmetProvider here */}
          <MemoryRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <App />
          </MemoryRouter>
        </HelmetProvider>
      )
    })
    // Use getAllByText for 'about' since it appears multiple times
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0)
  })
})
