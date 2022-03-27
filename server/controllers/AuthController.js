const User = require("../models/User");
const argon2 = require("argon2");

class AuthController {
    async handleRegister(req, res) {
        const { username, password } = req.body;

        // No username or password is present
        if (!username || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Wrong input" });
        }

        // Duplicating username
        const foundUser = await User.findOne({ username });
        if (foundUser) {
            return res
                .status(400)
                .json({ success: false, message: "User already exists" });
        }

        // HASH PASSWORD -> CREATE USER -> RETURN TOKEN
        const hashedPassword = await argon2.hash(password);
        User.create({
            username,
            password: hashedPassword,
        })
            .then((user) => {
                const accessToken = user.getJWT();
                res.json({
                    success: true,
                    message: "User created",
                    accessToken,
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            });
    }

    async handleLogin(req, res) {
        const { username, password } = req.body;

        // No username or password is present
        if (!username || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Wrong input" });
        }

        const foundUser = await User.findOne({ username });
        if (!foundUser) {
            return res
                .status(404)
                .json({ success: false, message: "No such user is found" });
        }
    }
}

module.exports = new AuthController();
