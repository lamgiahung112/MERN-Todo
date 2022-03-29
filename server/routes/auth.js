const express = require("express")
const router = express.Router()
const AuthController = require("../controllers/AuthController")
const authenticationMiddleware = require("../middlewares/authenticationMiddleware")

// @route /api/v1/auth/register
// @desc Register a new user
// @access Public
router.post("/register", AuthController.handleRegister)

// @route /api/v1/auth/login
// @desc Login a user
// @access Public
router.post("/login", AuthController.handleLogin)

// @route /api/v1/auth/verify
// @desc Check if the user is logged in
// @access Public
router.get("/verify", authenticationMiddleware, AuthController.verifyToken)

module.exports = router
