const jwt = require("jsonwebtoken");

const authenticationMiddleware = function (req, res, next) {
    const { title, description, url, state, accessToken } = req.body;

    try {
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.body = {
            title,
            description,
            url,
            state,
            user: decoded.userId,
        };
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            success: false,
            message: "You are not authenticated to use this feature!",
        });
    }
};

module.exports = authenticationMiddleware;
