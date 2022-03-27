const authRoute = require("./auth");

const initRoutes = function (app) {
    app.use("/api/v1/auth", authRoute);
};

module.exports = initRoutes;
