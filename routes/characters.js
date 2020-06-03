const express = require('express')
const characterModel = require('../models/characterModel')
const userModel = require('../models/userModel')
const router = express.Router()
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

// Get all
router.get('/characters/', async (req, res) => {
  
  try {
    const characters = await characterModel.find()
    res.send(characters)

  } catch (err) {
    res.status(500).send(err)
  }
})

// Get from one user
router.get('/usercharacters/:user', async (req, res) => {
  
    try {
      const specificCharacters = await characterModel.find({user: req.params.user})
      
      if (specificCharacters.length == 0) {
        res.status.length(404).json('User not found')
      } else {
        res.send(specificCharacters)
      }

    } catch (err) {
      res.status(500).send(err)
    }
  })

// Update
router.put('/characters/:id', requireSignIn, async (req, res) => {
  
  try {
    const id = req.params.id
    const user = await userModel.findOne({ username: req.body.username })
    const character = await characterModel.findByIdAndUpdate(id, req.body)
    req.session.username = user
    if (user === req.session.username) {
      await character.save()
    } else { 
      res.status(404).json('Not yours')
    }
    
    res.json({
      old: character,
      new: req.body  
    })
    console.log(req.session.username)
    console.log(user)
  } catch (err) {
    res.status(500).send(err)
  }
 
})

// Delete
router.delete('/characters/:id', requireSignIn, async (req, res) => {
    
  try {
    const character = await characterModel.findByIdAndDelete(req.params.id)

    if (!character) res.status(404).json("No item found")
    res.status(200).send()
    
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router