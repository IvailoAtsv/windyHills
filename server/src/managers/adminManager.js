const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const Admin = require('../models/Admin')
const { secret } = require('../config/config')


// exports.register = (adminData) => Admin.create(adminData)

exports.login = async (admin, password) => {
    const currentAdmin = await Admin.findOne ({ admin })
    if (!currentAdmin) {
        return new Error('Cannot find username or password')
    }
    const isValid = await bcrypt.compare(password, currentAdmin.password)
    if (!isValid) {
        return new Error('Cannot find username or password')
    }

    const payload = {
        _id: currentAdmin._id,
        admin: currentAdmin.admin
    }
    const token = jwt.sign(payload, secret, {expiresIn: '2d'})

    return token
}