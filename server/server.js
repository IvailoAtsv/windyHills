const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000

app.get('/api',(req,res)=>{
    res.json({"reservations":[]})
})

mongoose.connect('mongodb://127.0.0.1:27017/friendlyWorld')
    .then(() => console.log('DB connected succesfully'))
    .catch(err => console.log('db error ' + err))

app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`))