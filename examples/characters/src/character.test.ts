import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  const firstName = 'Ada';
  const lastName = 'Lovelace';
  const role = 'Computer Scientist';

  let character;

  beforeEach(() => {
    character = new Character(firstName, lastName, role);
  })

  it('should create a character with a first name, last name, and role', () => {
    const firstName = 'Ada';
    const lastName = 'Lovelace';
    const role = 'Computer Scientist';
  

    expect(character).toEqual(
      expect.objectContaining({
        firstName,
        lastName,
        role,
      }),
    );
  })

  it('should allow you to increase the level', () => {

    character.levelUp(); // Assuming this method increases the level by 1
    expect(character.level).toBe(2); // Assuming the initial level is 1
  });

  it('should update the last modified date when leveling up', () => {

    const initialModifiedDate = character.lastModified;
    character.levelUp();
    expect(character.lastModified).not.toBe(initialModifiedDate);
  });
});
