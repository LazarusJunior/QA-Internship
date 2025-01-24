const calculateTotal = require('./calculateTotal');

describe('calculateTotal', () => {
    it('calculates total with discount and tax', () => {
        const products = [
            { price: 50 },
            { price: 30 },
            { price: 25 }
        ];
        expect(calculateTotal(products)).toBe(102.06);
    });

    it('calculates total without discount', () => {
        const products = [
            { price: 20 },
            { price: 30 }
        ];
        expect(calculateTotal(products)).toBe(54);
    });

    it('throws error for invalid input', () => {
        expect(() => calculateTotal("not an array")).toThrow("Input must be an array of products");
    });
});