function calculateSubtotal(items) {
    let sum = 0;

    items.forEach(element => {
        sum += element.price * element.quantity;
    });

    return sum;
}

function calculateDiscount(subtotal, discountPercent) {
    return (subtotal * discountPercent) / 100;
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return (amountAfterDiscount * taxPercent) / 100;
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const tax = calculateTax(subtotal - discount, taxPercent);
    const total = (subtotal - discount) + tax;

    return [
        subtotal,
        discount,
        tax,
        total
    ]
}

const cartItems = [
    { name: 'Notebook', price: 10, quantity: 2 },
    { name: 'Pen', price: 2, quantity: 5 },
    { name: 'Bag', price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));