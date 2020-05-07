const mongoose = require('mongoose')

let CharacterSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  info: {
    name: String,
    movie: String,
    bestFrient: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
})

const Character = mongoose.model('Character', CharacterSchema)
module.exports = Character
