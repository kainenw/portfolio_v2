import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import About from './About'

describe('About', () => {
  it('renders the About page with key sections', () => {
    act(() => {
      render(<About />)
    })
    expect(screen.getByText(/Kainen White/i)).toBeInTheDocument()
    expect(screen.getByText(/UX Designer/i)).toBeInTheDocument()
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getByText(/My Work/i)).toBeInTheDocument()
    expect(screen.getByText(/Skills:/i)).toBeInTheDocument()
    expect(screen.getByText(/Experience:/i)).toBeInTheDocument()
    expect(screen.getByText(/Let's Build Something Amazing Together!/i)).toBeInTheDocument()
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
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument()
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
      fireEvent.mouseDown(screen.getByRole('dialog'))
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

  it('closes the modal on Enter or Space keydown on overlay', () => {
    act(() => {
      render(<About />)
    })
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /start a project/i }))
    })
    const dialog = screen.getByRole('dialog')
    act(() => {
      fireEvent.keyDown(dialog, { key: 'Enter' })
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    // Open again and test Space
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /start a project/i }))
    })
    const dialog2 = screen.getByRole('dialog')
    act(() => {
      fireEvent.keyDown(dialog2, { key: ' ' })
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
