const mongoose = require('mongoose')
const { Schema, model} = mongoose


const newRecipe = new Schema ({
    user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
    name:         {type:String, required: true},
    ingredients:  {type: Array },
    instructions: {type: Array },
    review:       {type: Array},

}, {timestamp: true})

const Recipe = model('score', highScore)

module.exports = Recipe
