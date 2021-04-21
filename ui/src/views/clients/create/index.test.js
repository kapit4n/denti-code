import { render, screen, fireEvent } from '@testing-library/react';
import Create from './index';

test('renders react name inputs', () => {
  render(<Create />);
  const nameInput = screen.queryByPlaceholderText(/Name/i);
  const ageInput = screen.queryByPlaceholderText(/Age/i);
  expect(nameInput).toBeTruthy();
  expect(ageInput).toBeTruthy();
});
