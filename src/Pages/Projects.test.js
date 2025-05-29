import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from './Projects'

// Mock the Carousel component
jest.mock('../Components/Carousel/Carousel', () => {
  return function MockCarousel({ items }) {
    return (
      <div data-testid="carousel">
        {items.map((item, index) => (
          <div key={index} data-testid={`project-${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
            {item.title}
          </div>
        ))}
      </div>
    )
  }
})

describe('Projects', () => {
  it('renders the Projects page with key elements', () => {
    render(<Projects />)
    
    // Check main heading and description
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText(/Explore my work in design and development/i)).toBeInTheDocument()
    
    // Check tab buttons
    expect(screen.getByRole('button', { name: /design/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /development/i })).toBeInTheDocument()
  })

  it('starts with design tab active by default', () => {
    render(<Projects />)
    
    const designButton = screen.getByRole('button', { name: /design/i })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    
    expect(designButton).toHaveClass('active')
    expect(developmentButton).not.toHaveClass('active')
    expect(designButton).toHaveAttribute('aria-pressed', 'true')
    expect(developmentButton).toHaveAttribute('aria-pressed', 'false')
  })

  it('displays design projects when design tab is active', () => {
    render(<Projects />)
    
    // Should show design section and projects
    expect(screen.getByText('Design Projects')).toBeInTheDocument()
    expect(screen.getByText(/User-centered design solutions/i)).toBeInTheDocument()
    expect(screen.getByTestId('project-voting-app')).toBeInTheDocument()
    expect(screen.getByTestId('project-portfolio-v2')).toBeInTheDocument()
    expect(screen.getByTestId('project-sushi-app')).toBeInTheDocument()
    
    // Should not show development section
    expect(screen.queryByText('Development Projects')).not.toBeInTheDocument()
  })

  it('switches to development tab when clicked', () => {
    render(<Projects />)
    
    const developmentButton = screen.getByRole('button', { name: /development/i })
    
    // Click development tab
    fireEvent.click(developmentButton)
    
    // Check tab states
    expect(developmentButton).toHaveClass('active')
    expect(screen.getByRole('button', { name: /design/i })).not.toHaveClass('active')
    expect(developmentButton).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /design/i })).toHaveAttribute('aria-pressed', 'false')
  })

  it('displays development projects when development tab is active', () => {
    render(<Projects />)
    
    const developmentButton = screen.getByRole('button', { name: /development/i })
    fireEvent.click(developmentButton)
    
    // Should show development section and projects
    expect(screen.getByText('Development Projects')).toBeInTheDocument()
    expect(screen.getByText(/Full-stack development work/i)).toBeInTheDocument()
    expect(screen.getByTestId('project-portfolio-v2-(development)')).toBeInTheDocument()
    expect(screen.getByTestId('project-reddit-app')).toBeInTheDocument()
    expect(screen.getByTestId('project-tonnetz-visualizer')).toBeInTheDocument()
    expect(screen.getByTestId('project-savings-calculator')).toBeInTheDocument()
    
    // Should not show design section
    expect(screen.queryByText('Design Projects')).not.toBeInTheDocument()
  })

  it('switches back to design tab when clicked', () => {
    render(<Projects />)
    
    const designButton = screen.getByRole('button', { name: /design/i })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    
    // Click development tab first
    fireEvent.click(developmentButton)
    expect(developmentButton).toHaveClass('active')
    
    // Click design tab again
    fireEvent.click(designButton)
    expect(designButton).toHaveClass('active')
    expect(developmentButton).not.toHaveClass('active')
    
    // Should show design projects again
    expect(screen.getByText('Design Projects')).toBeInTheDocument()
    expect(screen.queryByText('Development Projects')).not.toBeInTheDocument()
  })

  it('renders carousel components for both sections', () => {
    render(<Projects />)
    
    // Design section should have carousel
    expect(screen.getByTestId('carousel')).toBeInTheDocument()
    
    // Switch to development and check carousel
    const developmentButton = screen.getByRole('button', { name: /development/i })
    fireEvent.click(developmentButton)
    
    expect(screen.getByTestId('carousel')).toBeInTheDocument()
  })

  it('has proper ARIA attributes for accessibility', () => {
    render(<Projects />)
    
    const designButton = screen.getByRole('button', { name: /design/i })
    const developmentButton = screen.getByRole('button', { name: /development/i })
    
    expect(designButton).toHaveAttribute('aria-pressed')
    expect(developmentButton).toHaveAttribute('aria-pressed')
  })
})
