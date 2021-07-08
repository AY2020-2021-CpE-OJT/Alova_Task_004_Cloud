const express = require('express');
const mongoose = require('mongoose');
const bodParser = require('body-parser');
const morgan = require('morgan');
const phoneBookRoute = require('./routes/Phonebook');
require('dotenv').config;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodParser.json());
app.use(morgan('tiny'));
require('./DB')();

app.get('/', (req,res)=>{
    res.send("Hello World.");
});

app.use('/phone', phoneBookRoute);

app.listen(port, ()=>{
    console.log("Connected to port", port);
});