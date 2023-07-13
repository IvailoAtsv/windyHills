const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/dbConfig')
const cors = require('cors')
const cookiParser = require('cookie-parser')

const app = express()
const PORT = 4000
const router = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false, limit: "50mb", parameterLimit: 10000}))
app.use(cookiParser)
app.use(router)

dbConnect()
    .then(() => console.log('db connected successfuly'))
    .catch(err => console.log(err))

app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`))

module.exports = app