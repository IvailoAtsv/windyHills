const router = require('express').Router()
const reservationController = require('./controllers/reservationController')
const menuItemController = require('./controllers/menuItemController')
const adminController = require('./controllers/adminController')
const wineController = require('./controllers/wineController')

router.use('/menu', menuItemController)
router.use('/reservation', reservationController)
router.use('/admin', adminController)
router.use('/drinks', wineController)

module.exports = router