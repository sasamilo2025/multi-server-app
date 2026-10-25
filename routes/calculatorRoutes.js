// ======================================================
// MODULE 9 - EXERCISE 1
// CALCULATOR ROUTES
//
// Responsibility:
// Connect HTTP endpoints to controller functions.
// ======================================================

// Import Express.
const express = require("express");

// Create an Express router.
const router = express.Router();

// Import our calculator controller.
const calculatorController = require("../controllers/calculatorController");


// ------------------------------------------------------
// ADDITION
// GET /calculator/add?num1=10&num2=5
// ------------------------------------------------------

router.get("/add", calculatorController.add);


// ------------------------------------------------------
// SUBTRACTION
// GET /calculator/subtract?num1=10&num2=5
// ------------------------------------------------------

router.get("/subtract", calculatorController.subtract);


// ------------------------------------------------------
// MULTIPLICATION
// GET /calculator/multiply?num1=10&num2=5
// ------------------------------------------------------

router.get("/multiply", calculatorController.multiply);


// ------------------------------------------------------
// DIVISION
// GET /calculator/divide?num1=10&num2=5
// ------------------------------------------------------

router.get("/divide", calculatorController.divide);


// Export our router.
module.exports = router;