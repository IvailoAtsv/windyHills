const mongoose = require('mongoose')

const uri = 'mongodb://localhost/windy-hills'

async function dbConnect() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}


module.exports = dbConnect