import { render, screen } from '@testing-library/react'
import { act } from 'react'
import Contact from './Contact/Contact'

describe('Contact', () => {
  it('renders the Contact page with key sections', () => {
    act(() => {
      render(<Contact />)
    })
    // Use getAllByText for 'Contact' since it appears multiple times
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Let's Build Something Amazing Together!/i)).toBeInTheDocument()
    expect(screen.getByText(/Thank you for visiting my portfolio!/i)).toBeInTheDocument()
  })
})
