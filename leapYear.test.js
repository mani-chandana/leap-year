// leapYear.test.js
const isLeapYear = require('./leapYear');

describe('Leap Year Kata', () => {
    test('years divisible by 4 but not 100 are leap years', () => {
        expect(isLeapYear(2024)).toBe(true);
        expect(isLeapYear(2004)).toBe(true);
    });
});
