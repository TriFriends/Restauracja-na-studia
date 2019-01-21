const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = require('./users').userSchema

const orderSchema = new Schema({
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    user: userSchema
})

exports.orderSchema = orderSchema
