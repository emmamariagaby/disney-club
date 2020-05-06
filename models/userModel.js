const mongoose = require('mongoose')

let UserSchema = {
  userinfo: {
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
  },
}
// loggedin: Boolean,
// faveCharacter: String,
//   },
//   posts: {
//     nrOfposts: Number,
//     // posts: /**?? */
//   },
// }

module.exports = mongoose.model('User', UserSchema)
