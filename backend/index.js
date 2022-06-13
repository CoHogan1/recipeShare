// recipe backend.

// MONGODB PORT
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const sessions = require('sessions')
const expSess =  require('express-sessions')

const {errorHandler} = require('./middleWare/errorMiddleWare')

const methodOverride = require('method-override')
const cors = require('cors')

const mongoURI = process.env.MONGODB || 'mongodb://127.0.0.1:27017/' + 'recipe'
const db = mongoose.connection

const PORT = process.env.PORT || 4000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>{
    console.log("Mongo connection is  established.")
})

db.on('error', (err)=> console.log(err.message + ' Mongo is not running!!!'))
db.on('connected', ()=> console.log('Mongo connected'))
db.on('disconnected', ()=> console.log('Mongo is now Disconnected, Have a good day!'))

// cors handeling.
// const whitelist = ['http://localhost:3000','http://localhost:3001','https://updatedprojectonebackend.herokuapp.com/','https://updatedprojectonefrontend.herokuapp.com/']// all strings.
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1) {
//             // -1 outside the array
//             callback(null, true)
//         } else {
//             callback(new Error(`Not allowed by CORS`))
//         }
//     }
// }
// app.use(cors(corsOptions))


// user models
const userControllers = require('./controllers/users')
app.use('/user', userControllers)

// middleWare
//app.use(errorHandler)


app.get('/', (req, res)=>{
    console.log("main page working")
    res.send(`<h1>Working properly</h1>`)
})

app.listen(PORT, (req, res)=>{
    console.log("server running -->", PORT)
})
