const mongoose = require('mongoose')

const FoodItemSchema = new mongoose.Schema({
    img: {
        fileName: {
            type: String,
            required: true,
          },
          file: {
            data: Buffer,
            contentType: String,
          },
      },
    name: String,
    description: String,
    price: String,
})

const FoodItem = mongoose.model('FoodItem', FoodItemSchema)

module.exports = FoodItem 