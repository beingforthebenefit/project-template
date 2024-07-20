import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders hello world button', () => {
  act(() => {
    render(<App />);
  });
  const buttonElement = screen.getByText(/Hello, world!/i);
  expect(buttonElement).toBeInTheDocument();
});
