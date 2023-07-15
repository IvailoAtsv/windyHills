const Wine = require('../models/Wine')

exports.getMenu = () => {
    const result = Wine.find({})
    return result
}
exports.create = async (itemData) => {
    console.log({...itemData});
    Wine.create({...itemData})
}
exports.del = async(foodId) => Wine.findByIdAndDelete(foodId)