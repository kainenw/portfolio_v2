import { render } from '@testing-library/react'
import { act } from 'react'
import App from './App/App'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

describe('index.js', () => {
  it('renders App without crashing', () => {
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
  })
})
