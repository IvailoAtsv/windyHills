const router = require('express').Router()
const reservationManager = require('../managers/reservationManager')



router.post('/create', async (req, res) => {
    const { name, phone, email, details, time } = req.body
    const reservation = await reservationManager.create({ name, phone, email, details, time })
    console.log(reservation);
    res.send(reservation)
})

module.exports = router