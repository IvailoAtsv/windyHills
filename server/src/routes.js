const router = require('express').Router()
const reservationController = require('./controllers/reservationController')
const menuItemController = require('./controllers/menuItemController')

router.use('/menu', menuItemController)
router.use('/reservation', reservationController)
module.exports = router