const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
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
            enum: ["TO LEARN", "LEARNING", "LEARNED"],
            default: "TO LEARN",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("posts", PostSchema);
