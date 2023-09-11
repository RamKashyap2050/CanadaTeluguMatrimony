const express = require("express");
const path = require("path");
require('dotenv').config({ path: '../.env' }); 
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const expressAsyncHandler = require("express-async-handler");
PORT = process.env.PORT || 5001;

connectDB();

const app = express();
app.use(fileupload());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/Users", require("./routes/UserRoutes"));


app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
