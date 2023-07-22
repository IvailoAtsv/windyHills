const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'name is required'],
        min:[3,'name must be at least 3 characters long']
    },
    phone:{
        type:String,
        required: [true, 'phone is required'],
        min:[10,'phone must be at least 10 characters long']

    },
    email:{
        type:String,
        required: [true, 'email is required']
    },
    guests:{
        type:Number,
        required: [true, 'guests number is required'],
        min:[1,'At least one guest is required']
    },
    details:{
        type:String,
    },
    hours:{
        type:String,
        required: [true, 'hours are required'],
        min:[9,'Restaurant opens at 9']
    },
    minutes:{
        type:String,
        required: [true, 'minutes are required']
    },
    date: {
        type:String,
        required: [true, 'date is required']
    },
})

const Reservation = mongoose.model('Reservation', ReservationSchema)

module.exports = Reservation 