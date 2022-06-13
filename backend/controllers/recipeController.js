const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users')
const Recipe = require('../models/recipe.js')



// create
router.post('/:id', (req, res)=>{
	console.log("post route working")
	blackBoxModel.create(req.body, (error, createVacation)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else{
			console.log("status 201 created vacation")
			res.status(201).json(createVacation)
		}
	})
})


// get all goals
// READ
router.get('/goals:id', (req, res)=>{
    console.log("db check")
    Recipe.find({user: req.user.id}, (err, data)=>{
        if(err){
            console.log(err)
            res.send('error')
        } else {
            res.status(200).send(data)
        }
    })
})
