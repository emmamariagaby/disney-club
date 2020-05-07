const express = require('express')
const characterModel = require('../models/characterModel')
const router = express()

router.get('/characters', async (req, res) => {
  const characters = await characterModel.find({})

  try {
    res.send(characters)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/characters', async (req, res) => {
  const character = new characterModel(req.body)

  try {
    await character.save()
    res.send(character)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router