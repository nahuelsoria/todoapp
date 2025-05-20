import React from 'react';
import { render, screen }_from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders welcome heading', () => {
  render(<LandingPage />);
  const headingElement = screen.getByText(/Welcome to your Todo App!/i);
  expect(headingElement).toBeInTheDocument();
});
