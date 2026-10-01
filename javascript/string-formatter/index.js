function cleanText(text) {
    return text.trim();
}

function capitalize(text) {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDisplayName(firstName, lastName) {
    return capitalize(cleanText(firstName)) + " " + capitalize(cleanText(lastName));
}

console.log(formatDisplayName('  ava', 'STONE  ')); // Ava Stone
console.log(formatDisplayName('nOAh', '  kim')); // Noah Kim
console.log(formatDisplayName('  mINA  ', 'pATEL')); // Mina Patel