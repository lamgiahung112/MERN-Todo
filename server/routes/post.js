const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

// @route /api/v1/posts
// @desc Create a new post
// @access Private
router.post("/", authenticationMiddleware, PostController.handleCreatePost);

module.exports = router;
