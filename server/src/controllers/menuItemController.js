const router = require('express').Router()
const foodManager = require('../managers/foodManager')

router.get('/', async (req, res) => {
    console.log('it works');
    const menu = await foodManager.getMenu()
    res.send(menu)
})
router.post('/create', async (req, res) => {
    console.log(req.body.name);
    const { imageUrl, name, description, price } = req.body
    const foodItem = await foodManager.create({ imageUrl, name, description, price })
    res.send(foodItem)
})
module.exports = router 