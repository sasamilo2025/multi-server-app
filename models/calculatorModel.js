// ======================================================
// MODULE 9 - EXERCISE 1
// CALCULATOR MODEL
//
// Responsibility:
// Perform mathematical calculations independently
// of Express routes and HTTP requests.
// ======================================================


// Addition
const add = (num1, num2) => {
    return num1 + num2;
};


// Subtraction
const subtract = (num1, num2) => {
    return num1 - num2;
};


// Multiplication
const multiply = (num1, num2) => {
    return num1 * num2;
};


// Division
const divide = (num1, num2) => {

    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return num1 / num2;
};


// Export functions for the controller.
module.exports = {
    add,
    subtract,
    multiply,
    divide
};