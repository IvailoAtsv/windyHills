const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/windy-hills'

const dbConnect = async () => {
    await mongoose.connect(uri)
}

module.exports = dbConnect