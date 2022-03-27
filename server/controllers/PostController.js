const Post = require("../models/Post");

class PostController {
    handleCreatePost(req, res) {
        const { title, description, url, state, user } = req.body;
        const newPost = new Post({ title, description, url, state, user });
        res.json({
            success: true,
            message: "Created a new post",
            post: newPost,
        });
    }
}

module.exports = new PostController();
