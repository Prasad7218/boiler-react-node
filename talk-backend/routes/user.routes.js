// routes/user.routes.js
const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// Define routes
// Example: GET all users
router.get("/", async (req, res) => {
  console.log("hiiiiiiiiiii");
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/register", async (req, res) => {
  console.log("hiiiiiiiiiii");

  const { email, password } = req.body;

  try {
    // Create a new user
    const user = new User({
      email,
      password,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
