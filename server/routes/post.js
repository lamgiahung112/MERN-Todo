const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

// @route /api/v1/posts
// @desc Create a new post
// @access Private
router.post("/", authenticationMiddleware, PostController.handleCreatePost);

// @route /api/v1/posts
// @desc Get posts of a user
// @access Private
router.get("/", authenticationMiddleware, PostController.getPostsOfAUser);

// @route /api/v1/posts/:id
// @desc update a post
// @access Private
router.put("/:id", authenticationMiddleware, PostController.updateAPost);

// @route /api/v1/posts/:id
// @desc delete a post
// @access Private
router.delete("/:id", authenticationMiddleware, PostController.deleteAPost);

module.exports = router;
