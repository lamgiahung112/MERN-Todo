const Post = require("../models/Post");

class PostController {
    async handleCreatePost(req, res) {
        const { title, description, url, state, user } = req.body;

        Post.create({
            title,
            description,
            url: url.startsWith("https://") ? url : `https://${url}`,
            state,
            user,
        })
            .then((post) => {
                return res.json({
                    success: true,
                    message: "Created post successfully",
                    post,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({
                    success: false,
                    message: "An error occurred, please try again later!",
                });
            });
    }

    async getPostsOfAUser(req, res) {
        const { user } = req.body;
        const posts = await Post.find({ user }, "-id -user");

        if (!posts) {
            return res.json({
                success: false,
                message: "No post is found",
            });
        }

        return res.json({ posts });
    }
}

module.exports = new PostController();
