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

const Order = mongoose.model('Order', orderSchema)

exports.Order = Order
exports.orderSchema = orderSchema
