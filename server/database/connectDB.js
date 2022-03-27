const mongoose = require("mongoose");

const connectDB = async function (mongoURI) {
    try {
        return mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true,
        });
    } catch {
        console.log("Error connecting to DB");
    }
};

module.exports = connectDB;
