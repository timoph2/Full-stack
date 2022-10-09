// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

let indexRouter = require('./routes/index.js')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL)
mongoose.connect(' ')

const {Schema,model} = mongoose;
const xxSchema = new Schema({
  user: {
    type: String,
    unique: true // `email` must be unique
  },
  pw: String
})


app.use('/', indexRouter)



app.listen(process.env.PORT || 3005, () =>{
    console.log('listening on 3005!')
})




