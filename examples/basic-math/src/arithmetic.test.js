import { describe, it, expect } from 'vitest';
import { add, subtract } from './arithmetic.js';
import { multiply, divide } from './arithmetic.js';

describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2,2)).toBe(4);
    })

    it('should add two negative numbers', () => {
      expect(add(-2,-3)).toBe(-5);
    })

    it('should parse String inputs to numbers', () => {
      expect(add('1','1')).toBe(2); // string inputs
    })

    it('should get real angry if you give first input as non numeric Strings', () => {
      expect(() => add('kjhf', 7)).toThrow(
        'A first argument is not a number'
      ); // NaN case
    })

    it('should get real angry if you give second input as non numeric Strings', () => {
      expect(() => add(2, 'fg')).toThrow(
        'A second argument is not a number'
      ); // NaN case
    })
});

describe('subtract', () => {
    it('should subtract two numbers', () => {
        expect(subtract(5,3)).toBe(2);
    });
});

describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3,4)).toBe(12);
    });
});

describe('divide', () => {
    it('should divide two numbers', () => {
        expect(divide(10,2)).toBe(5);
    });
});
