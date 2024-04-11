const express = require('express');
const app = express();
const port = 8000;
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

// connec to Mongo
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// use routes
app.use('/user', require('./routes/user.routes'));

// launch server
app.listen(port, () => console.log("test au port" + port));

