import {render, screen} from '@testing-library/react'
import About from './About'
import {MemoryRouter} from 'react-router-dom'

test('renders About component', async () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  )

  // Check if the main title is present
  expect(screen.getByText(/About Us/i)).toBeInTheDocument()

  // Check if the body text is present
  expect(
    screen.getByText(/We are a team of dedicated professionals/i),
  ).toBeInTheDocument()
})
