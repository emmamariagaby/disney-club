require('./connect')
const express = require('express')
const characters = require('./routes/characters')
const users = require('./routes/users')
const app = express()
const chalk = require("chalk");
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false })) //Post Body Parser

app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})

app.use(cors({
    credentials: true,
    origin:"http://localhost:3000"
   }))
    


app.use(cookieSession({
    secret: 'aVeryS3cr3tK3y',
    maxAge: 1000 * 10, // 10s
    sameSite: 'strict',
    httpOnly: true,
    secure: false,
}))

app.get('/', (req, res) => res.send('Welcome to Disney-Club'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use(characters)
app.use('/users', users)


app.listen(3000, () => console.log(chalk.blue("Server is running at: http://localhost:3000"))
);