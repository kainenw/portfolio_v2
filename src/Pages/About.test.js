import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import About from './About'

describe('About', () => {
  it('renders the About page with key sections', () => {
    act(() => {
      render(<About />)
    })
    expect(screen.getByText(/Design With Purpose/i)).toBeInTheDocument()
    expect(screen.getByText(/User-centered thinking meets measurable impact/i)).toBeInTheDocument()
    expect(screen.getByText(/My Work/i)).toBeInTheDocument()
    expect(screen.getByText(/Skills:/i)).toBeInTheDocument()
    expect(screen.getByText(/Experience:/i)).toBeInTheDocument()
    expect(screen.getByText(/I'm Kainen/i)).toBeInTheDocument()
  })

  it('renders the Start a Project button', () => {
    act(() => {
      render(<About />)
    })
    expect(screen.getByRole('button', { name: /start a project/i })).toBeInTheDocument()
  })

  it('opens the modal with contact form when Start a Project is clicked', () => {
    act(() => {
      render(<About />)
    })
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /start a project/i }))
    })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument()
  })

  it('closes the modal when overlay is clicked', () => {
    act(() => {
      render(<About />)
    })
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /start a project/i }))
    })
    // Click the overlay (dialog background)
    act(() => {
      fireEvent.click(screen.getByRole('dialog'))
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal when close button is clicked', () => {
    act(() => {
      render(<About />)
    })
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /start a project/i }))
    })
    const closeBtn = screen.getByLabelText(/close/i)
    act(() => {
      fireEvent.click(closeBtn)
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
