import React from 'react'
import {render, screen} from '@testing-library/react'
import Header from './Header'

test('renders Header component', () => {
  render(<Header />)
  expect(screen.getByText(/My App/i)).toBeInTheDocument()
  expect(screen.getByText(/Login/i)).toBeInTheDocument()
})
