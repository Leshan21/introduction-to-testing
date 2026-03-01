import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  
  it('renders with an initial count of 0', () => {
    render(<Counter />);
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0'); // Check if the initial count is 0

  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i }); // Get the Decrement button
    const resetButton = screen.getByRole('button', {name: /reset/i }); // Get the Reset button

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();


  });

  it('displays "days" when the count is 0', () => {
    render(<Counter />);
    const unit = screen.getByTestId('counter-unit');
    expect(unit).toHaveTextContent('days'); // Check if the unit is "days" when count is 0
  });

  it(
    'increments the count when the "Increment" button is clicked',
    async () => {
      render(<Counter />);
      const incrementButton = screen.getByRole('button', { name: /increment/i }); // Get the Increment button

      
      await userEvent.click(incrementButton); // Simulate a click on the Increment button
      
      

      const counter = screen.getByTestId('counter-count'); // 
      expect(counter).toHaveTextContent('1'); // Check if the count has incremented to 1
    },
  );

  it('displays "day" when the count is 1', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i }); // Get the Increment button
    const unit = screen.getByTestId('counter-unit'); // Get the unit element
    await userEvent.click(incrementButton); // Simulate a click on the Increment button
    expect(unit).toHaveTextContent('day'); // Check if the unit changes to "day" when count is 1
  });

  it(
    'decrements the count when the "Decrement" button is clicked',
    async () => {
      render(<Counter initialCount={1}/>);
      const decrementButton = screen.getByRole('button', {name: /decrement/i }); // Get the Decrement button
      const counter = screen.getByTestId('counter-count'); // Get the counter element

      expect(decrementButton).not.toBeDisabled(); // Check if the Decrement button is enabled when count is 1
      await userEvent.click(decrementButton); // Simulate a click on the Decrement button
      expect(counter).toHaveTextContent('0'); // Check if the count has decremented to 0
      expect(decrementButton).toBeDisabled(); // Check if the Decrement button is disabled when count is 0

    },
  );

  it('does not allow decrementing below 0', async () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i }); // Get the Decrement button
    const unit = screen.getByTestId('counter-unit'); // Get the unit element

    expect(decrementButton).toBeDisabled(); // Check if the Decrement button is disabled when count is 0
  });

  it.todo(
    'resets the count when the "Reset" button is clicked',
    async () => {},
  );

  it.todo(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    () => {},
  );

  it.todo('updates the document title based on the count', async () => {});
});
