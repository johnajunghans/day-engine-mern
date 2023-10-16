const Ritual = require('../models/ritualModel');

// create new ritual
const createRitual = async (req, res) => {
    const { name, type, description } = req.body;

    // add doc to db
    try {
        const user_id = req.user._id;
        const ritual = await Ritual.create({name, user_id, description})
        res.status(200).json(ritual)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET rituals given activeRituals array from routine 
const getRituals = async (req, res) => {
    
    const user_id = req.user._id;
    const rituals = await Ritual.find({
        user_id
    }).sort({createdAt: -1})
    res.status(200).json(rituals);
} 

// exports

module.exports = {
    createRitual,
    getRituals
}