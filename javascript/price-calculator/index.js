function calculateDiscount(price, discountPercent) {
    return (price * discountPercent) / 100; 
}

function calculateTax(priceAfterDiscount, taxPercent) {
    return (priceAfterDiscount * taxPercent) / 100;
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
    price = price - calculateDiscount(price, discountPercent);
    return price + calculateTax(price, taxPercent);
}

function createPriceSummary(price, discountPercent, taxPercent) {
    const discountedPrice = price - calculateDiscount(price, discountPercent);
    return [
        price,
        calculateDiscount(price, discountPercent),
        calculateTax(discountedPrice, taxPercent),
        calculateFinalPrice(price, discountPercent, taxPercent),
    ];
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));