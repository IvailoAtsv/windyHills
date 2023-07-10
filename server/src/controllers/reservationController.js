const router = require('express').Router()
const reservationManager = require('../managers/reservationManager')

router.post('/create', async (req, res) => {
    const { name, phone, email, details, time } = req.body
    console.log(name);
    const reservation = await reservationManager.create({ name, phone, email, details, time })
    res.send(reservation)
})

module.exports = router