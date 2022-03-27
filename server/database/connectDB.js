const mongoose = require("mongoose");

const connectDB = async function (mongoURI) {
    try {
        return mongoose.connect(mongoURI);
    } catch {
        console.log("Error connecting to DB");
    }
};

module.exports = connectDB;
