import React from 'react'
import {render, screen} from '@testing-library/react'
import Footer from './Footer'

test('renders Footer component', () => {
  render(<Footer />)
  expect(
    screen.getByText(/EventHub. All rights reserved./i),
  ).toBeInTheDocument()
})
