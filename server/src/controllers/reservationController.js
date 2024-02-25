const router = require('express').Router()
const reservationManager = require('../managers/reservationManager')
const auth = require('../middlewares/auth')
const { isAuth } = require('../middlewares/auth')

router.post('/create', async (req, res) => {
    const { name, phone, email, details, guests, hours, minutes, date } = req.body
    const reservation = await reservationManager.create({ name, guests: Number(guests), phone, email, details, hours, minutes, date })
    res.send(reservation)
})
router.post('/delete', isAuth, async (req, res) => {
    await reservationManager.delReservation(req.body._id.toString().trim())
    res.end()
})

router.get('/', async (req, res) => {
    const reservations = await reservationManager.getReservations()
    res.send(reservations)
})
module.exports = router