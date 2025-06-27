import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react'
import App from '../App/App'
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

it('renders about link', () => {
  let getAllByText;
  act(() => {
    ({ getAllByText } = render(
      <HelmetProvider>
        <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <App />
        </MemoryRouter>
      </HelmetProvider>
    ));
  });
  // There may be multiple 'about' (nav and heading)
  expect(getAllByText(/about/i).length).toBeGreaterThan(0)
})
