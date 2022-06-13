const mongoose = require('mongoose')
const { Schema, model} = mongoose


const newRecipe = new Schema ({
    name:         {type:String, required: true},
    ingredients:  {type: Array },
    instructions: {type: Array },
    review:       {type: Array},
    
    user:      {type: Aray },
    highscore: {type: Aray },

}, {timestamp: true})

const Recipe = model('score', highScore)

module.exports = Recipe


user:      {type:String, required: true},
highscore: {type:Number, required: true},
