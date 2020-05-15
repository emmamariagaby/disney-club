const express = require('express')
const characterModel = require('../models/characterModel')
const router = express()
const requireSignIn = require('../auth')


// Create
router.post('/characters', requireSignIn, async (req, res) => {
  
  try {
    const character = new characterModel(req.body)
    const findCharacter = await characterModel.findOne ({ name: req.body.name })

    if (!findCharacter) {
      await character.save()
      res.send(character) 
      } else {
        res.status(400).json('Character already exists')
      }

  } catch (err) {
    res.status(500).send(err)
  }
})

// Read
router.get('/characters', async (req, res) => {
  
    try {
      const characters = await characterModel.find()
      res.send(characters)

    } catch (err) {
      res.status(500).send(err)
    }
  })

// Update
router.put('/characters/:id', async (req, res) => {

  try {
    const id = req.params.id
    const character = await characterModel.findByIdAndUpdate(id, req.body)
    await character.save()
    
    res.json({
      old: character,
      new: req.body  
    })
  
  } catch (err) {
    res.status(500).send(err)
  }
})

// Delete
router.delete('/characters/:id', async (req, res) => {
    
  try {
    const character = await characterModel.findByIdAndDelete(req.params.id)

    if (!character) res.status(404).send("No item found")
    res.status(200).send()
    
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router