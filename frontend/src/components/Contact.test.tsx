import {render, screen} from '@testing-library/react'
import Contact from './Contact'
import {MemoryRouter} from 'react-router-dom'

test('renders Contact component', async () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  )

  // Check if the main title is present
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()

  // Check if the body text is present
  expect(
    screen.getByText(
      /If you have any questions, feel free to reach out to us./i,
    ),
  ).toBeInTheDocument()

  // Check if the form fields are present
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()

  // Check if the submit button is present
  expect(screen.getByText(/Send/i)).toBeInTheDocument()
})
