const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.methods.getJWT = function () {
    return jwt.sign(
        {
            userId: this._id,
        },
        process.env.JWT_SECRET
    );
};

module.exports = mongoose.model("users", UserSchema);
