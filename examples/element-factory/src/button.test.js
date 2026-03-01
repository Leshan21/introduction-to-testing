import { screen, fireEvent } from '@testing-library/dom'; // Import the createButton function from the button.js file
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user interactions
import { createButton } from './button.js';

describe('createButton', () => {

  afterEach(() => {
    document.body.innerHTML = ''; // Clean up the document body after each test
  })

  it('should create a button element', () => {
    document.body.appendChild(createButton()); // Append the button to the document body for testing
    const button = screen.getByRole('button', { name: 'Click Me' }); // Use getByRole to find the button by its role and name
    expect(button).toBeInTheDocument(); // Check if the button is in the document
   });

  it('should have the text "Click Me"', () => {
    const button = createButton();
    expect(button.textContent).toBe('Click Me'); // This will fail until the createButton function is implemented
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton()); // Append the button to the document body for testing

    const button = screen.getByRole('button', { name: 'Click Me'}); // Use getByRole to find the button by its role and name

    await userEvent.click(button); // Simulate a click event on the button using userEvent
    
    
    expect(button.textContent).toBe('Clicked!'); // This will fail until the createButton function is implemented
  });
});
