const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
    admin: String,
    password: String,
})

adminSchema.virtual('repeatPassword').set(function (value) {
    if (value != this.password) {
        throw new mongoose.MongooseError('Passwords don\'t match')
    }
})

adminSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin