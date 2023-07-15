const mongoose = require('mongoose')

const FoodItemSchema = new mongoose.Schema({
    name: String,
    imageUrl:String,
    description: String,
    price: String,
})

const FoodItem = mongoose.model('FoodItem', FoodItemSchema)

module.exports = FoodItem 