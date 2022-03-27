const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

// @route /api/v1/auth/register
// @desc Register a new user
// @access Public
router.post("/register", AuthController.handleRegister);

// @route /api/v1/auth/login
// @desc Login a user
// @access Public
router.post("/login", AuthController.handleLogin);

module.exports = router;
