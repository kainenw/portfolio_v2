import { render, screen, fireEvent } from '@testing-library/react'
import ThemeMenu from './ThemeMenu'

describe('ThemeMenu', () => {
  it('renders the theme toggle button', () => {
    render(<ThemeMenu theme="dark" changeTheme={jest.fn()} />)
    expect(screen.getByRole('button', { name: /change theme/i })).toBeInTheDocument()
  })

  it('calls changeTheme with the next theme', () => {
    const changeTheme = jest.fn()
    render(<ThemeMenu theme="dark" changeTheme={changeTheme} />)
    fireEvent.click(screen.getByRole('button'))
    expect(changeTheme).toHaveBeenCalledWith('light')
  })
})
