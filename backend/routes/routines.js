// require
const express = require('express');
const { createRoutine, getRoutines } = require('../controllers/routineController.js');
const requireAuth = require('../middleware/requireAuth');

// create router
const router = express.Router();

// Protect routes by checking for authorization
router.use(requireAuth);

// GET all routines - WILL CHANGE LATER WHEN CREATING AUTH
router.get('/', getRoutines);

// POST new routine
router.post('/', createRoutine);

//exports
module.exports = router;