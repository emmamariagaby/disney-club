const express = require('express')
const userModel = require('../models/userModel')
const router = express()
const bcrypt = require('bcrypt')

// Register user
router.post('/register', async (req, res) => {

    try {
        const password = await bcrypt.hash(req.body.password, 10)
        const user = new userModel({
        username: req.body.username,
        password: password
    })
        await user.save()
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Login user
router.post("/login", async (req, res) => {
    const user = await userModel.findOne({ username: req.body.username })

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
       return res.status(401).json('Wrong username or password')
    }

  req.session.username = user.username
  req.session.userId = user._id
   
  res.send('You are logged in')
})

// Get all users
router.get('/', async (req, res) => {

    try {
        const users = await userModel.find()
        res.send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})



module.exports = router