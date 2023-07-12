const Reservation = require('../models/Reservation')

exports.create = async (data) => {
    console.log(data);
    Reservation.create({...data})
}
