import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ecole Marie Marvingt title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ecole Marie Mavingt/i);
  expect(linkElement).toBeInTheDocument();
});
