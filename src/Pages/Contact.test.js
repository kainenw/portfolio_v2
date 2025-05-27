import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the Contact page with key sections', () => {
    render(<Contact />)
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
    expect(screen.getByText(/Let\'s Build Something Amazing Together!/i)).toBeInTheDocument()
    expect(screen.getByText(/Thank you for visiting my portfolio!/i)).toBeInTheDocument()
  })
})
