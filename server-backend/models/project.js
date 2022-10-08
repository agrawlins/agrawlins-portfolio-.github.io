const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Movie blueprint
const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    codeURL: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Project", projectSchema)