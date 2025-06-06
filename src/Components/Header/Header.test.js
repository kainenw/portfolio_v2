import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Header theme="light" changeTheme={jest.fn()} />
      </MemoryRouter>
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('renders the theme toggle button', () => {
    render(
      <MemoryRouter>
        <Header theme="dark" changeTheme={jest.fn()} />
      </MemoryRouter>
    )
    expect(screen.getByRole('button', { name: /change theme/i })).toBeInTheDocument()
  })

  it('calls changeTheme with the next theme', () => {
    const changeTheme = jest.fn()
    render(
      <MemoryRouter>
        <Header theme="dark" changeTheme={changeTheme} />
      </MemoryRouter>
    )
    screen.getByRole('button', { name: /change theme/i }).click()
    expect(changeTheme).toHaveBeenCalledWith('light')
  })
})
