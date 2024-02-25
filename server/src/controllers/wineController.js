const router = require('express').Router()
const wineManager = require('../managers/wineManager')
const { isAuth } = require('../middlewares/auth')



router.post('/create',isAuth, async (req, res) => {
    const { imageUrl, name, description, price } = req.body
    
    const wine = await wineManager.create({ name, description, price, imageUrl })
    
    res.send(wine)
});

router.post('/delete', isAuth, async (req, res) => {
    await wineManager.del(req.body._id.toString().trim())
    res.end()
})
router.get('/', async (req, res) => {
    const menu = await wineManager.getMenu()
    res.json(menu)
    res.end()
})
module.exports = router 