const jwt = require("jsonwebtoken")

const authenticationMiddleware = function (req, res, next) {
    const { title, description, url, state } = req.body

    try {
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error()
        }
        const accessToken = authHeader.split(" ")[1]
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET)
        req.body = {
            title,
            description,
            url,
            state,
            user: decoded.userId,
        }
        next()
    } catch {
        return res.status(403).json({
            success: false,
            message: "You are not authenticated to use this feature!",
        })
    }
}

module.exports = authenticationMiddleware
