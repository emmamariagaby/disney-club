const mongoose = require('mongoose')

let CharacterSchema = new mongoose.Schema({
    name: String,
    movie: String,
    bestFriend: String
})

const Character = mongoose.model('Character', CharacterSchema)
module.exports = Character
