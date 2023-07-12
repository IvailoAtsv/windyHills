const router = require('express').Router()
const reservationController = require('./controllers/reservationController')
const menuItemController = require('./controllers/menuItemController')
const adminController = require('./controllers/adminController')


router.use('/menu', menuItemController)
router.use('/reservation', reservationController)
router.use('/admin', adminController)

module.exports = router