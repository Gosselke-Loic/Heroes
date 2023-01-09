const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        default: ""
    },
    healthPoints: {
        type: Number,
        default: 10
    },
    damage: {
        type: Number,
        default: 0
    },
    defense:  {
        type: Number,
        default: 0
    },
    speed:  {
        type: Number,
        default: 0
    },
    level:  {
        type: Number,
        default: 0
    },
    gold: {
        type: Number,
        default: 0
    },
    weapons: {
        type: String,
        default: ""
    }
}, { timestamps: true })

module.exports = mongoose.model("hero", heroSchema);