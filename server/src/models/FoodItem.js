const mongoose = require('mongoose')

const FoodItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is required'],
    } ,
    imageUrl:{
       type: String,
       required:[true,'imageUrl is required']
    },
    description: {
        type:String,
        required:[true,'description is required']
    },
    price: {
        type:String,
        required:[true,'price is required']
    }
})

const FoodItem = mongoose.model('FoodItem', FoodItemSchema)

module.exports = FoodItem 