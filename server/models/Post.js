const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    state: {
        type: String,
        required: true,
        enum: ["To Learn", "Learning", "Learned"],
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
    },
});

module.exports = mongoose.model("posts", PostSchema);
