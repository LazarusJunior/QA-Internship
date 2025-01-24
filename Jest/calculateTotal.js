function calculateTotal(products) {
    if (!Array.isArray(products)) {
        throw new Error("Input must be an array of products");
    }

    let total = products.reduce((sum, product) => sum + (product.price || 0), 0);

    if (total > 100) {
        total *= 0.9; 
    }

    total *= 1.08; 

    return parseFloat(total.toFixed(2));
}

module.exports = calculateTotal;