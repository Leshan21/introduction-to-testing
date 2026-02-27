import { screen } from '@testing-library/dom'; // Import the createButton function from the button.js file
import { createButton } from './button.js';

describe('createButton', () => {
  it('should create a button element', () => {
    const button = createButton();
    expect(button).toBeInstanceOf(HTMLButtonElement); // This will fail until the createButton function is implemented
    expect(button.tagName).toBe('BUTTON'); // This will also fail until the createButton function is implemented
  });

  it('should have the text "Click Me"', () => {
    const button = createButton();
    expect(button.textContent).toBe('Click Me'); // This will fail until the createButton function is implemented
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    const button = createButton();
    button.click();
    expect(button.textContent).toBe('Clicked!'); // This will fail until the createButton function is implemented
  });
});
