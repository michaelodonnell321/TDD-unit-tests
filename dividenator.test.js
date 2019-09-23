let dividenator = require('./dividenator.js')

test(`if number is divisible by 3, return 'Fizz'`, () => {
    expect(dividenator(9)).toBe('Fizz');
});

test(`if number is divisible by 5, return 'Buzz'`, () => {
    expect(dividenator(10)).toBe('Buzz');
});

test(`if number is divisible by BOTH 3 and 5, return 'FizzBuzz`, () => {
    expect(dividenator(15)).toBe('FizzBuzz');
});

