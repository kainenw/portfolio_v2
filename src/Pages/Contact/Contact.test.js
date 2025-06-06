import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { MemoryRouter } from 'react-router-dom'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the Contact page with key sections', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      )
    })
    expect(screen.getByText(/Let's Connect!/i)).toBeInTheDocument()
    expect(screen.getByText(/Let's Build Something Amazing Together!/i)).toBeInTheDocument()
    expect(screen.getByText(/Thank you for visiting my portfolio!/i)).toBeInTheDocument()
  })
})
