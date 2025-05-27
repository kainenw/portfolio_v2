import { render, screen } from '@testing-library/react'
import Projects from './Projects'

describe('Projects', () => {
  it('renders the Projects page with key sections', () => {
    render(<Projects />)
    expect(screen.getByText(/Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/Design/i)).toBeInTheDocument()
    expect(screen.getByText(/Development/i)).toBeInTheDocument()
    expect(screen.getByText(/Voting App/i)).toBeInTheDocument()
    expect(screen.getByText(/Portfolio v2/i)).toBeInTheDocument()
    expect(screen.getByText(/Sushi App/i)).toBeInTheDocument()
    expect(screen.getByText(/Reddit App/i)).toBeInTheDocument()
    expect(screen.getByText(/Tonnetz Visualizer/i)).toBeInTheDocument()
    expect(screen.getByText(/Savings Calculator/i)).toBeInTheDocument()
  })
})
