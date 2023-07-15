const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/dbConfig')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = 4000
const router = require('./routes')

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded({extended:true }))
app.use(router)
app.use(cookieParser)
app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

dbConnect()
    .then(() => console.log('db connected successfuly'))
    .catch(err => console.log(err))

app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`))

module.exports = app