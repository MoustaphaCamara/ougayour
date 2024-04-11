const express = require('express');
const app = express();
const port = 8000;
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const UserModel = require("./models/user.model");

// connect to MongoDB
connectDB().then(() => console.log("connected to MDB"));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// use routes
app.use('/user', require('./routes/user.routes'));

// launch server
app.listen(port, () => console.log(`Port ouvert: ${port}`));

