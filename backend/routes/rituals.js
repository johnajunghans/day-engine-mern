// require
const express = require('express');
const { createRitual, getRituals } = require('../controllers/ritualController')
const requireAuth = require('../middleware/requireAuth');

// create router
const router = express.Router();

// Protect routes by checking for authorization
router.use(requireAuth);

// GET all rituals - WILL CHANGE LATER WHEN CREATING AUTH
router.get('/', getRituals);

// POST new ritual
router.post('/', createRitual);

module.exports = router;
