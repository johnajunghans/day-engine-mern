// require
require('dotenv').config()
const express = require('express');
const routineRoutes = require('./routes/routines.js');

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('./api/routines', routineRoutes);

// listening
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})