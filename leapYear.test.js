let leapYear = require('./leapYear.js');

test(`if year is divisible by 4, return true`, () => {
    expect(leapYear(16)).toBe(true);
});

test(`if year is divisible by 100 and not 400, return false`, () => {
    expect(leapYear(100)).toBe(false);
});

test(`if year is divisible by 400, return true`, () => {
    expect(leapYear(1200)).toBe(true);
});