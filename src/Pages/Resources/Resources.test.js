import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../../Components/Header/Header'

describe('Resources', () => {
  it('is not rendered or linked in the navigation', () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header theme="light" changeTheme={jest.fn()} />
      </MemoryRouter>
    )
    expect(screen.queryByText(/resources/i)).not.toBeInTheDocument()
  })
})
