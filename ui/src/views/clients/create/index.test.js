import { render, screen, fireEvent } from '@testing-library/react';
import Create from './index';

test('renders react name inputs', () => {
  const screen = render(<Create />);

  const nameInput = screen.queryByPlaceholderText(/First Name/i);
  expect(nameInput).toBeTruthy();

  expect(nameInput.value).toBe("")
  fireEvent.change(nameInput, { target: { value: "Luis" } })
  expect(nameInput.value).toBe("Luis")

  const lastName = screen.queryByPlaceholderText(/Last Name/i);
  expect(lastName).toBeTruthy();
  expect(lastName.value).toBe("")
  fireEvent.change(lastName, { target: { value: "Arce" } })
  expect(lastName.value).toBe("Arce")

  const submitBtn = screen.queryByText(/Submit/i);
  expect(submitBtn).toBeTruthy();

  fireEvent.click(submitBtn)

});

