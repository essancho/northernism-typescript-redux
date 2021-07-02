require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileUpload = require("express-fileupload");
const path = require("path");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
// app.get("/", async (req, res) => {
//     res.status(200).json({ message: "Working" });
// });

// Error Handling, last Middleware
app.use(errorHandler);
//
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server Started on Port ${PORT}`);
        });
    } catch (err) {
        ç;
        console.error(err.message);
    }
};

start();
