function isPositive(number) {
    return number > 0 ? true : false;
}

function isNegative(number) {
    return number < 0 ? true : false;
}

function isZero(number) {
    return number === 0 ? true : false;
}

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

function describeNumber(number) {
    return number = [
        `positive: ${isPositive(number)}`,
        `negative: ${isNegative(number)}`,
        `zero: ${isZero(number)}`,
        `even: ${isEven(number)}`,
        `odd: ${isEven(number) === false}`
    ]
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));