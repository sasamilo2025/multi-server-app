// ======================================================
// MODULE 9 - EXERCISE 1
// CALCULATOR CONTROLLER
//
// Responsibilities:
// 1. Read HTTP query parameters.
// 2. Validate user input.
// 3. Call the calculator model.
// 4. Return JSON responses.
// ======================================================

// Import our mathematical functions.
const calculatorModel = require('../models/calculatorModel');


// ------------------------------------------------------
// HELPER: VALIDATE TWO NUMBERS
// ------------------------------------------------------

const validateNumbers = (req, res) => {

    // Read the original query parameters.
    const rawNum1 = req.query.num1;
    const rawNum2 = req.query.num2;

    // Convert the supplied values into numbers.
    const num1 = Number(rawNum1);
    const num2 = Number(rawNum2);

    // Reject missing, empty or invalid values.
    if (
        typeof rawNum1 !== 'string' ||
        typeof rawNum2 !== 'string' ||
        rawNum1.trim() === '' ||
        rawNum2.trim() === '' ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2)
    ) {

        res.status(400).json({
            error: "Please provide two valid numbers."
        });

        return null;
    }

    return { num1, num2 };
};


// ------------------------------------------------------
// ADDITION
// GET /calculator/add?num1=10&num2=5
// ------------------------------------------------------

const add = (req, res) => {

    const numbers = validateNumbers(req, res);

    if (!numbers) return;

    const { num1, num2 } = numbers;

    const result = calculatorModel.add(num1, num2);

    return res.status(200).json({
        operation: "addition",
        num1,
        num2,
        result
    });
};


// ------------------------------------------------------
// SUBTRACTION
// GET /calculator/subtract?num1=10&num2=5
// ------------------------------------------------------

const subtract = (req, res) => {

    const numbers = validateNumbers(req, res);

    if (!numbers) return;

    const { num1, num2 } = numbers;

    const result = calculatorModel.subtract(num1, num2);

    return res.status(200).json({
        operation: "subtraction",
        num1,
        num2,
        result
    });
};


// ------------------------------------------------------
// MULTIPLICATION
// GET /calculator/multiply?num1=10&num2=5
// ------------------------------------------------------

const multiply = (req, res) => {

    const numbers = validateNumbers(req, res);

    if (!numbers) return;

    const { num1, num2 } = numbers;

    const result = calculatorModel.multiply(num1, num2);

    return res.status(200).json({
        operation: "multiplication",
        num1,
        num2,
        result
    });
};


// ------------------------------------------------------
// DIVISION
// GET /calculator/divide?num1=10&num2=5
// ------------------------------------------------------

const divide = (req, res) => {

    const numbers = validateNumbers(req, res);

    if (!numbers) return;

    const { num1, num2 } = numbers;

    // Prevent division by zero.
    if (num2 === 0) {

        return res.status(400).json({
            error: "Division by zero is not allowed."
        });
    }

    const result = calculatorModel.divide(num1, num2);

    return res.status(200).json({
        operation: "division",
        num1,
        num2,
        result
    });
};


// ------------------------------------------------------
// EXPORT CONTROLLER FUNCTIONS
// ------------------------------------------------------

module.exports = {
    add,
    subtract,
    multiply,
    divide
};