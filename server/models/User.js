const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

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
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

UserSchema.methods.verifyPassword = async function (hashedPassword, password) {
    const isCorrectPassword = await argon2.verify(hashedPassword, password);
    return isCorrectPassword;
};

module.exports = mongoose.model("users", UserSchema);
