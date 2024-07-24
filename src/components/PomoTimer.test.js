import { render, screen } from '@testing-library/react';
import Apps from './PomoTimer';

test('renders learn react link', () => {
  render(<Apps/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});