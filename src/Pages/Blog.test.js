import { render, screen } from '@testing-library/react'
import Blog from './Blog'

describe('Blog', () => {
  it('renders the Blog page with key sections', () => {
    render(<Blog />)
    expect(screen.getByText(/blog/i)).toBeInTheDocument()
    expect(screen.getByText(/highlighted posts/i)).toBeInTheDocument()
    expect(screen.getByText(/Let\'s support Mozilla/i)).toBeInTheDocument()
  })
})
