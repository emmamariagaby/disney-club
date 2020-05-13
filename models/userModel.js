const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User
