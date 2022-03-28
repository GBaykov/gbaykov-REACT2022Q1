import React from 'react';
import { render } from '@testing-library/react';
import Card from './components/card';

test('', () => {
  const { getByText } = render(<Card />);
  const linkElement = getByText(/name: Jon/i);
  expect(linkElement).toBeInTheDocument();
});
