import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders User Name Form Control', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i)
  fireEvent.click(linkElement)
  expect(screen.getByText(/User Name/i)).toBeTruthy()
  expect(screen.getByText(/Password/i)).toBeTruthy()
})
