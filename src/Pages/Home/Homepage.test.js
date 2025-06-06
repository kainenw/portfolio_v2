import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Homepage from './Homepage'

describe('Homepage', () => {
  it('renders hero section with headline and actions', () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Homepage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 1, name: /user-centric/i })).toBeInTheDocument()
    expect(screen.getByText(/passionate designer/i)).toBeInTheDocument()
    const viewProjects = screen.getByRole('link', { name: /view projects/i })
    const myProcess = screen.getByRole('link', { name: /my process/i })
    const getInTouchLinks = screen.getAllByRole('link', { name: /get in touch/i })
    expect(viewProjects).toBeInTheDocument()
    expect(myProcess).toBeInTheDocument()
    expect(getInTouchLinks.length).toBeGreaterThan(0)
    expect(viewProjects).toHaveAttribute('href', '/projects')
    expect(myProcess).toHaveAttribute('href', '/about#my-process')
    expect(getInTouchLinks.some(link => link.getAttribute('href') === '/contact')).toBe(true)
  })

  it('renders featured projects section and at least one project card', () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Homepage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 2, name: /featured projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view all projects/i })).toHaveAttribute('href', '/projects')
    expect(screen.getByTestId('project-voting-app')).toBeInTheDocument()
    expect(screen.getByTestId('project-portfolio-v2')).toBeInTheDocument()
    expect(screen.getByTestId('project-sushi-app')).toBeInTheDocument()
  })

  it('renders homepage CTA section with correct text and button', () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Homepage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { level: 2, name: /ready to build/i })).toBeInTheDocument()
    expect(screen.getByText(/i'd love to hear from you/i)).toBeInTheDocument()
    const ctaButtons = screen.getAllByRole('link', { name: /get in touch/i })
    expect(ctaButtons[ctaButtons.length - 1]).toHaveAttribute('href', '/contact')
  })
})
