const FoodItem = require('../models/FoodItem')

exports.getMenu = () => {
    const result = FoodItem.find({})
    return result
}
exports.create = async (itemData) => {
    console.log({...itemData});
    FoodItem.create({...itemData})
}