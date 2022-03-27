const authRoute = require("./auth");
const postRoute = require("./post");

const initRoutes = function (app) {
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/posts", postRoute);
};

module.exports = initRoutes;
