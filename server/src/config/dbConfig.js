const mongoose = require('mongoose')

const uri = 'mongodb://localhost/windy-hills'

const dbConnect = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = dbConnect