const express = require('express')
const characters = require('./routes/characters')
const users = require('./routes/users')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})

app.get('/', (req, res) => res.send('Welcome to Disney-Club'))

//app.use('/characters', characters)
//app.use('/users', users)


app.listen(3000, () => console.log('Server is up and running!'))