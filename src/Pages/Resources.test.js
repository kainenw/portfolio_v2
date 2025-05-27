import { render, screen } from '@testing-library/react'
import Resources from './Resources'

describe('Resources', () => {
  it('renders the Resources page with key sections', () => {
    render(<Resources />)
    expect(screen.getByText(/Resources/i)).toBeInTheDocument()
    expect(screen.getByText(/Master the Fundamentals/i)).toBeInTheDocument()
    expect(screen.getByText(/Popular Frameworks & Libraries/i)).toBeInTheDocument()
    expect(screen.getByText(/Design Powerhouses/i)).toBeInTheDocument()
    expect(screen.getByText(/Collaboration and Version Control/i)).toBeInTheDocument()
    expect(screen.getByText(/Free Learning Paths/i)).toBeInTheDocument()
    expect(screen.getByText(/Common Web Development Challenges/i)).toBeInTheDocument()
  })
})
