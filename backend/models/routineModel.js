const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const routineSchema = new Schema({
    name: {type: String, required: true},
    wakeAndSleepTimes: {
        Sunday: {
            wake: String,
            sleep: String
        },
        Monday: {
            wake: String,
            sleep: String
        },
        Tuesday: {
            wake: String,
            sleep: String
        },
        Wednesday: {
            wake: String,
            sleep: String
        },
        Thursday: {
            wake: String,
            sleep: String
        },
        Friday: {
            wake: String,
            sleep: String
        },
        Saturday: {
            wake: String,
            sleep: String
        }
    },
    ritualInstances: [
        {
            ritualId: String,
            name: String,
            startTime: String,
            endTime: String,
            activeDays: {
                Sunday: Boolean,
                Monday: Boolean,
                Tuesday: Boolean,
                Wednesday: Boolean,
                Thursday: Boolean,
                Friday: Boolean,
                Saturday: Boolean
            }
        }
    ],
    dayMapping: {
        Sunday: [
            {
                ritualInstanceId: String,
                name: String,
                startTime: String,
                endTime: String
            }
        ],
        Monday: [
            {
                ritualInstanceId: String,
                name: String,
                startTime: String,
                endTime: String
            }
        ],
        Tuesday: [
            {
                ritualInstanceId: String,
                name: String,
                startTime: String,
                endTime: String
            }
        ],
        Wednesday: [
            {
                ritualInstanceId: String,
                name: String,
                startTime: String,
                endTime: String
            }
        ],
        Thursday: [
            {
                ritualInstanceId: String,
                name: String,
                startTime: String,
                endTime: String
            }
        ],
        Friday: [
            {
                ritualInstanceId: String,
                name: String,
                startTime: String,
                endTime: String
            }
        ],
        Saturday: [
            {
                ritualInstanceId: String,
                name: String,
                startTime: String,
                endTime: String
            }
        ]
    },
    activeRituals: [String]
}, {timestamps: true})

// const ritualInstance = new Schema({
//     ritualId: {type: String, required: true},
//     name: {type: String, required: true},
//     startTime: {type: String, required: true},
//     endTime: {type: String, required: true},
//     activeDays: {
//         Sunday: Boolean,
//         Monday: Boolean,
//         Tuesday: Boolean,
//         Wednesday: Boolean,
//         Thursday: Boolean,
//         Friday: Boolean,
//         Saturday: Boolean
//     }
// })

// const dayMap = new Schema({
//     ritualInstanceId: {type: String, required: true},
//     name: {type: String, required: true},
//     startTime: {type: String, required: true},
//     endTime: {type: String, required: true}
// })

module.exports = mongoose.model('Routine', routineSchema);
