// require
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//required routes
const routineRoutes = require('./routes/routines.js');
const userRoutes = require('./routes/users.js');
const ritualRoutes = require('./routes/rituals');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(cors())

// routes
app.use('/api/routines', routineRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rituals', ritualRoutes);

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

