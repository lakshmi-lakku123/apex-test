import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to My App/i);
  expect(linkElement).toBeInTheDocument();
});

// Add more test cases as needed
