const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Movie blueprint
const historySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        minimumValue: 1993,
        maximumValue: 2022,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("History", historySchema)