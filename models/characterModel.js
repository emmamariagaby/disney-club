const mongoose = require('mongoose')

let CharacterSchema = ({
    name: String,
    movie: String,
    bestFrient: String
})

module.exports = mongoose.model("Character", CharacterSchema)