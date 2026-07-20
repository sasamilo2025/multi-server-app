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

// ------------------------------------------------------
// Server Configuration
// ------------------------------------------------------

// Server identity
const SERVER_NAME = "🚀 Model 5/Exercise 1";
const VERSION = "v1.0.0";

/* Server port
   If an environment port exists, use it.
   Otherwise, default to port 3000. 
*/
const PORT = process.env.PORT || 3000;

// ------------------------------------------------------
// Routes
// ------------------------------------------------------

/*
 * Home Route
 * This function runs whenever a user visits:
 * http://localhost:3000/
 */

app.get("/", (req, res) => {
   // res.send("🚀 Welcome aboard Model5, Exercise1!");
      res.send(`
    <h1>🚀 Model 5 - Exercise 1</h1>
    <h2>Express Server Running Successfully!</h2>
    <p>Status: 🟢 ONLINE</p>
`);

});

// ------------------------------------------------------
// Start the Server
// ------------------------------------------------------

app.listen(PORT, () => {

    // Clear the terminal for a clean startup screen
    console.clear();

    // Display server information
    console.log("==================================================");
   //  console.log(` ${SERVER_NAME}`);
   //  console.log(` Version : ${VERSION}`);
   //  console.log(` Status  : 🟢 ONLINE`);
   //  console.log(` URL     : http://localhost:${PORT}`);
   //  console.log(` Started : ${new Date().toLocaleString()}`);
      console.log(` Version     : ${VERSION}`);
      console.log(` Status      : 🟢 ONLINE`);
      console.log(` Environment : ${process.env.NODE_ENV || "development"}`);
      console.log(` URL         : http://localhost:${PORT}`);
      console.log(` Started     : ${new Date().toLocaleString()}`);
    console.log("==================================================");
});