const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = require('./orders').orderSchema

const tableSchema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    seats: {
        type: Number,
        required: true
    },
    reservation: [orderSchema]
})

const Table = mongoose.model('Table', tableSchema)

export { tableSchema, Table }
