const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    details:String,
    time:String,
})

const Reservation = mongoose.model('Reservation', ReservationSchema)

module.exports = Reservation 