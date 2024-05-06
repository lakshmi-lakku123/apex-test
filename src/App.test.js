// App.test.js

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders logo', () => {
  const { getByAltText } = render(<App />);
  const logoElement = getByAltText('logo');
  expect(logoElement).toBeInTheDocument();
});
