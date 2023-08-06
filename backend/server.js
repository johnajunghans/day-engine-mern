// require
require('dotenv').config()
const express = require('express');
const routineRoutes = require('./routes/routines.js');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/routines', routineRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listening
        console.log('connected to db')
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

