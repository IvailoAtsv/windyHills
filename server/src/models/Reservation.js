const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    details:String,
    hours:String,
    minutes:String,
})

const Reservation = mongoose.model('Reservation', ReservationSchema)

module.exports = Reservation 