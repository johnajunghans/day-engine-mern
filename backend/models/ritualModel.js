const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ritualSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    description: {
        what: String,
        where: String,
        why: String
    },
    user_id: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Ritual', ritualSchema);

