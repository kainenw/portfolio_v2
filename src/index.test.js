import { render } from '@testing-library/react'
import { act } from 'react'
import App from './App/App'
import { MemoryRouter } from 'react-router-dom'

describe('index.js', () => {
  it('renders App without crashing', () => {
    act(() => {
      render(
        <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <App />
        </MemoryRouter>
      )
    })
  })
})
