/* ======================================================
   Model 5/Exercise 1- Multi Server App
   Author: Sasa Milo
   Description:
   A simple Express server demonstrating how to create
   and run a web server on localhost.
   ======================================================*/

// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Serve static files from the public folder
app.use(express.static("public"));

// ------------------------------------------------------
// Server Configuration
// ------------------------------------------------------

// Server identity
const SERVER_NAME = "🚀 Model 5/Exercise 1";
const VERSION = "v1.0.0";

/*
 * Server port
 * If an environment port exists, use it.
 * Otherwise, default to port 3000.
 */
const PORT = process.env.PORT || 3000;

// ------------------------------------------------------
// Routes
// ------------------------------------------------------

app.get("/", (req, res) => {

    res.send(`
        <h1>🚀 Model 5 - Exercise 1</h1>
        <h2>Express Server Running Successfully!</h2>
        <p>Status: 🟢 ONLINE</p>
        <p>Version: ${VERSION}</p>
         <small>
           (Local demo - Express server must be running)
        </small>
    `);

});

// ------------------------------------------------------
// Calculator API - Addition
// ------------------------------------------------------

app.get("/calculator/add", (req, res) => {

    // Read the two numbers from the URL query parameters.
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    // Validate missing or invalid numbers.
    if (
        req.query.num1 === undefined ||
        req.query.num2 === undefined ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2)
    ) {
        return res.status(400).json({
            error: "Please provide two valid numbers."
        });
    }

    // Perform addition.
    const result = num1 + num2;

    // Return the result as JSON.
    res.json({
        operation: "addition",
        num1: num1,
        num2: num2,
        result: result
    });

});

// ------------------------------------------------------
// Calculator API - Subtraction
// ------------------------------------------------------

app.get("/calculator/subtract", (req, res) => {

    // Read both numbers from the URL query parameters.
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    // Validate missing or invalid input.
    if (
        req.query.num1 === undefined ||
        req.query.num2 === undefined ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2)
    ) {
        return res.status(400).json({
            error: "Please provide two valid numbers."
        });
    }

    // Perform subtraction.
    const result = num1 - num2;

    // Return the calculation result as JSON.
    res.json({
        operation: "subtraction",
        num1: num1,
        num2: num2,
        result: result
    });

});

// ------------------------------------------------------
// Calculator API - Multiplication
// ------------------------------------------------------

app.get("/calculator/multiply", (req, res) => {

    // Read the numbers from the URL query parameters.
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    // Check for missing or invalid numbers.
    if (
        req.query.num1 === undefined ||
        req.query.num2 === undefined ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2)
    ) {
        return res.status(400).json({
            error: "Please provide two valid numbers."
        });
    }

    // Multiply the two numbers.
    const result = num1 * num2;

    // Return the result as JSON.
    res.json({
        operation: "multiplication",
        num1: num1,
        num2: num2,
        result: result
    });

});

// ------------------------------------------------------
// Calculator API - Division
// ------------------------------------------------------

app.get("/calculator/divide", (req, res) => {

    // Read both numbers from the URL query parameters.
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    // Validate missing or invalid numbers.
    if (
        req.query.num1 === undefined ||
        req.query.num2 === undefined ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2)
    ) {
        return res.status(400).json({
            error: "Please provide two valid numbers."
        });
    }

    // Prevent division by zero.
    if (num2 === 0) {
        return res.status(400).json({
            error: "Division by zero is not allowed."
        });
    }

    // Perform division.
    const result = num1 / num2;

    // Return the result as JSON.
    res.json({
        operation: "division",
        num1: num1,
        num2: num2,
        result: result
    });

});

// ------------------------------------------------------
// Start the Server
// ------------------------------------------------------

app.listen(PORT, () => {

    console.clear();

    console.log("==================================================");
    console.log(`${SERVER_NAME}`);
    console.log(`Version     : ${VERSION}`);
    console.log(`Status      : 🟢 ONLINE`);
    console.log(`Environment : ${process.env.NODE_ENV || "development"}`);
    console.log(`URL         : http://localhost:${PORT}`);
    console.log(`Started     : ${new Date().toLocaleString()}`);
    console.log("==================================================");

});
