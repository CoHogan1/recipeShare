const express = require('express')
const jwt = require('jsonwebtoken')
//const asyncHandler = require('express-async-handler')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')

router.get('/', (req, res)=>{
    console.log("working")
    res.send("user")
})


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
    // see if user paid.....$$
    const {email, password} = req.body
    const user = User.findOne({email})

    if (user && (bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: genToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


// register
router.post('/register', (req, res)=>{
    const {name, email, password } = req.body
    // check if they are sent properly
    if (!name || !email || !password){
        res.status(400)
        throw new Error('Please fill in all fields')
    }
    // see if user exists
    const userExists = User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    // hash password
    const salt = bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hash(password, salt)
    // create user in db
    const user = User.create({
        name,
        email,
        password: hashedPassword,
    })
    if (user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: genToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})



module.exports = router
