const express = require('express')
const userModel = require('../models/userModel')
const router = express()


// Create
router.post('/users', async (req, res) => {
    const user = new userModel(req.body)

    try {
        await user.save()
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Read
router.get('/users', async (req, res) => {
    const users = await userModel.find({})

    try {
        res.send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/users/:id', async (req, res) => {
    const user = await userModel.find({})

    try {
        await userModel.findByIdAndUpdate(req.params.id, req.body)
        await userModel.save()
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)

        if (!user) res.status(404).send("No user found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router