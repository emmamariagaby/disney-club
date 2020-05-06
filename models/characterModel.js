const mongoose = require('mongoose')

let CharacterSchema = {
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
  }

module.exports = mongoose.model("Character", CharacterSchema)