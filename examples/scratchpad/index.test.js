import { test, expect, vi } from 'vitest';


const logSpy = vi.spyOn(console, 'log');


test('a super simple test', () => {
  console.log('This is a log message');

  expect(logSpy).toHaveBeenCalled(); // This will pass because console.log was called
  expect(logSpy).toHaveBeenCalledWith('This is a log message'); // This will also pass 
  expect(logSpy).toHaveBeenCalledTimes(1); // This will pass because console.log was called exactly once
  expect(logSpy).toHaveBeenCalledOnce(); // This will also pass because console.log was called exactly once
});
