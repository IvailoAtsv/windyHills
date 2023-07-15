const router = require('express').Router()
const foodManager = require('../managers/foodManager')
const { isAuth } = require('../middlewares/auth')



router.post('/create', isAuth, async (req, res) => {
    const { imageUrl, name, description, price } = req.body
    
    const foodItem = await foodManager.create({ name, description, price, imageUrl })
    
    res.send(foodItem)
});

router.post('/delete', isAuth, async (req, res) => {
    console.log(req.body._id);
    await foodManager.del(req.body._id.toString().trim())
    res.end()
})
router.get('/', async (req, res) => {
    console.log('it works');
    const menu = await foodManager.getMenu()
    res.json(menu)
    res.end()
})
module.exports = router 