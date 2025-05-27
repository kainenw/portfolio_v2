import { render } from '@testing-library/react'
import App from './App/App'
import { MemoryRouter } from 'react-router-dom'

describe('index.js', () => {
  it('renders App without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })
})
