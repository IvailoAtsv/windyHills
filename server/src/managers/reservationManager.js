const Reservation = require('../models/Reservation')

exports.create = (data) => {
    console.log(data);
    Reservation.create({...data})
}
