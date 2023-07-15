const mongoose = require('mongoose')

const WineSchema = new mongoose.Schema({
    name: String,
    imageUrl:String,
    description: String,
    price: String,
})

const Wine = mongoose.model('Wine', WineSchema)

module.exports = Wine 