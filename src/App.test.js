import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; // Import the App component

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn react/i);
  expect(linkElement).toBeInTheDocument();
});
