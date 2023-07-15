const Reservation = require('../models/Reservation')

exports.create = async (data) => {
    console.log(data);
    Reservation.create({ ...data })
}
exports.getReservations = () => {
    const reservations = Reservation.find()
    return reservations
}
exports.delReservation = (id) => Reservation.findByIdAndDelete(id)
