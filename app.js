// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

let indexRouter = require('./routes/index.js')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://m002-student:m002-student@sandbox.0qtedq0.mongodb.net/?retryWrites=true&w=majority')

const {Schema,model} = mongoose;
const xxSchema = new Schema({
  user: {
    type: String,
    unique: true // `email` must be unique
  },
  pw: String
})


// Account.create({ 
//   user: NewUser, 
//   pw: Newpw }) 
// res.redirect('/')

// //correct_user = Account.findOne({user: user}).exec()  //async, use await or .then( result => {...} )



app.use('/', indexRouter)



app.listen(process.env.PORT || 3005, () =>{
    console.log('listening on 3005!')
})




