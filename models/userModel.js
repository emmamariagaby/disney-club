const mongoose = require('mongoose')

let UserSchema = ({
    name: String,
    movie: String,
    bestFrient: String
})

module.exports = mongoose.model("User", UserSchema)