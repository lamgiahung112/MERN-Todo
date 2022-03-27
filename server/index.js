require("dotenv").config();
const express = require("express");

const connectDB = require("./database/connectDB");
const initRoutes = require("./routes");

const app = express();

app.use(express.json());
initRoutes(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    connectDB(process.env.MONGO_URI).then(() => {
        console.log("Connected to DB");
        console.log(`Connected to PORT: ${PORT}`);
    });
});
