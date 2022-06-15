const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')

// Generate JWT
const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

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
router.post('/login', async (req, res)=>{
    console.log('login route hit', req.body);
    // see if user paid.....$$
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: genToken(user._id),
            friends: user.friends,
            recipe: user.recipe,
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


// register
router.post('/reg', async (req, res)=>{
    console.log('register route hit', req.body);
    const {username, email, password } = req.body

    // see if user exists
    // const userExists = User.findOne({email})
    // if (userExists) {
    //     res.status(400)
    //     throw new Error('User already exists')
    // }

    // hash password
    const salt = await bcrypt.genSalt(10)// a promise?

    const hashedPassword = await bcrypt.hash(password, salt)
    // create user in db
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })

    if (user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: genToken(user._id),
            friends: user.friends,
            recipe: user.recipe,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})



module.exports = router;
