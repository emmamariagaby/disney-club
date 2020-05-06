var mongoose = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect("mongodb://localhost:27017/disney-club", options)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("we're connected!")
})