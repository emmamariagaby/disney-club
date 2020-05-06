const express = require('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})



app.listen(3000, () => console.log('Server is up and running!'))