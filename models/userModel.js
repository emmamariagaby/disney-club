const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  name: String,
  password: String,
})

const User = mongoose.model('User', UserSchema)
module.exports = User
