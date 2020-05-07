require('./connect')
const express = require('express')
const characters = require('./routes/characters')
const users = require('./routes/users')
const app = express()
const chalk = require("chalk");

app.use(express.json())


app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})

app.get('/', (req, res) => res.send('Welcome to Disney-Club'))

app.use(characters)
app.use(users)


app.listen(3000, () => console.log(chalk.blue("Server is running at: http://localhost:3000"))
);