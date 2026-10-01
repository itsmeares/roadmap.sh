function formatName(firstName, lastName) {
    const lowerFirstName = firstName.toLowerCase();
    const lowerLastName = lastName.toLowerCase();

    return (
        lowerFirstName.charAt(0).toUpperCase() + String(lowerFirstName).slice(1) +
        " " +
        lowerLastName.charAt(0).toUpperCase() + String(lowerLastName).slice(1));
}

function getGreeting(timeOfDay) {
    if (timeOfDay == "morning") {
        return "Good morning, ";
    } else if (timeOfDay == "evening") {
        return "Good evening, ";
    } else if (timeOfDay == "afternoon") {
        return "Good afternoon, ";
    }
}

function createGreeting(firstName, lastName, timeOfDay) {
    return getGreeting(timeOfDay) + formatName(firstName, lastName);
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));