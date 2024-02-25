const FoodItem = require('../models/FoodItem')

exports.getMenu = () => {
    const result = FoodItem.find({})
    console.log(result);
    return result
}
exports.create = async (itemData) => {
    console.log({...itemData});
    FoodItem.create({...itemData})
}
exports.del = async(foodId) => FoodItem.findByIdAndDelete(foodId)