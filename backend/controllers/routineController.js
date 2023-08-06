const Routine = require('../models/routineModel.js');

// create new routine
const createRoutine = async (req, res) => {
    const { name, wakeAndSleepTimes, ritualInstances, dayMapping, activeRituals } = req.body;

    // add doc to db
    try {
        const routine = await Routine.create({name, wakeAndSleepTimes, ritualInstances, dayMapping, activeRituals})
        res.status(200).json(routine)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET all routines - WILL CHANGE LATER WHEN CREATING AUTH
const getRoutines = async (req, res) => {
    const routines = await Routine.find({
        // uid: User ID
    }).sort({createdAt: -1})
    res.status(200).json(routines);
} 

// exports

module.exports = {
    createRoutine,
    getRoutines
}