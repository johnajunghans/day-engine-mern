// require
const express = require('express');
const { createRoutine, getRoutines } = require('../controllers/routineController.js');

// create router
const router = express.Router();

// GET all routines - WILL CHANGE LATER WHEN CREATING AUTH
router.get('/', getRoutines);

// POST new routine
router.post('/', createRoutine);

//exports
module.exports = router;