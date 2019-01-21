const mongoose = require('mongoose')
const Schema = mongoose.Schema

let menuSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Menu = mongoose.model('Menu', menuSchema)

exports.Menu = Menu
exports.menuSchema = menuSchema