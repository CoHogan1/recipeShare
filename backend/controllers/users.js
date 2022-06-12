const express = require('express')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')

// view full database
router.get('/database', (req, res)=>{
    console.log("db check")
    User.find({}, (err, data)=>{
        if(err){
            console.log(err)
            res.send('error')
        } else {
            res.send(data)
        }
    })
})


// login
router.post('/login', (req, res)=>{
    // need to verify user password....?
    console.log(req.body, ", login route hit")
    User.findOne({email: req.body.email}, (error, foundUser)=>{
        if (error){
            res.status(400).json({error: error.message})
        }
        console.log(foundUser, " this is the logged in user.");
        res.status(200).json(foundUser)
    })
})


// register
route.post('/register', (req, res)=>{
    console.log('register', req.body)
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
        if (error) {
            res.status(400).json({ error: error.message })
        } else {
            console.log(createdUser);
            res.status(200).json(createdUser)
        }
    })
})



module.exports = router
