const Post = require("../models/Post")

class PostController {
    async handleCreatePost(req, res) {
        const { title, description, url, state, user } = req.body

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
                })
            })
            .catch((err) => {
                let message =
                    err.code === 11000
                        ? "Title already exists"
                        : "An error occurred, please try again later!"
                return res.status(400).json({
                    success: false,
                    message,
                })
            })
    }

    async getPostsOfAUser(req, res) {
        const { user } = req.body
        Post.find({ user }, "-user")
            .then((posts) => {
                console.log(posts)
                return res.json({
                    success: true,
                    message: "Successfully found posts of user",
                    posts,
                })
            })
            .catch(() => {
                return res.status(400).json({
                    success: false,
                    message: "Internal server error. Please try again later!",
                })
            })
    }

    async updateAPost(req, res) {
        const { title, description, url, state } = req.body

        Post.findOneAndUpdate(
            { _id: req.params.id },
            { title, description, url, state },
            { new: true }
        )
            .then((post) => {
                return res.json({
                    success: true,
                    message: "Successfully updated post",
                    post,
                })
            })
            .catch(() => {
                return res.status(400).json({
                    success: false,
                    message: "Internal error. Please try again later!",
                })
            })
    }

    async deleteAPost(req, res) {
        Post.findOneAndDelete({ _id: req.params.id })
            .then(() => {
                return res.json({
                    success: true,
                    message: "Successfully deleted post",
                })
            })
            .catch(() => {
                return res.status(400).json({
                    success: false,
                    message: "Internal server error. Please try again later",
                })
            })
    }
}

module.exports = new PostController()
