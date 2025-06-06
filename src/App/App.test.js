import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing and shows header', () => {
    act(() => {
      render(
        <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <App />
        </MemoryRouter>
      )
    })
    // Use getAllByText for 'about' since it appears multiple times
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0)
  })
})
