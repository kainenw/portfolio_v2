import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the About page with key sections', () => {
    render(<About />)
    expect(screen.getByText(/Kainen White/i)).toBeInTheDocument()
    expect(screen.getByText(/UX Designer/i)).toBeInTheDocument()
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getByText(/My Work/i)).toBeInTheDocument()
    expect(screen.getByText(/Skills:/i)).toBeInTheDocument()
    expect(screen.getByText(/Experience:/i)).toBeInTheDocument()
    expect(screen.getByText(/Let\'s Build Something Amazing Together!/i)).toBeInTheDocument()
  })
})
