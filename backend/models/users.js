const mongoose = require('mongoose')
const { Schema, model } = mongoose

// create user object
const userSchema = new Schema({
    // required for identification on app.
    username: {type: String, required: true},
    email:    {type: String, required: true},
    password: {type: String, required: true},
    recipe:   {type:Array },
    friends:  {type:Array },
}, {timestamp: true})

const User = model('User', userSchema)
module.exports = User
