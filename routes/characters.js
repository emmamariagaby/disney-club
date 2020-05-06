const express = require('express')
const characterModel = require('../models/characterModel')

const router = express.Router()

router.post('/', async (req, res, next) => {
    const character = req.body
    const characterDoc = await new characterModel(character)
    const savedDocument = await characterDoc.save()
    res.send(JSON.stringify(savedDocument))
})

router.get('/', (req, res, next) => {
    const characterId = req.query.id
})