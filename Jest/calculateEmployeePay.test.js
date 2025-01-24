const calculateEmployeePay = require('./calculateEmployeePay');

describe('calculateEmployeePay', () => {
    it('calculates net pay with overtime', () => {
        expect(calculateEmployeePay(20, 45, 1.5, 0.2)).toBe(760);
    });

    it('calculates net pay without overtime', () => {
        expect(calculateEmployeePay(20, 40, 1.5, 0.2)).toBe(640);
    });

    it('calculates net pay with no hours worked', () => {
        expect(calculateEmployeePay(20, 0, 1.5, 0.2)).toBe(0);
    });
});