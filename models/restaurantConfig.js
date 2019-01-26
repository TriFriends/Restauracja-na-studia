const mongoose = require('mongoose')
const Schema = mongoose.Schema

let restaurantConfigSchema = new Schema({
    open: {
        type: String
    },
    close: {
        type: String
    },
    maxDayAhead: {
        type: Number
    }
})

const RestaurantConfig = mongoose.model('RestaurantConfig', restaurantConfigSchema)

exports.RestaurantConfig = RestaurantConfig
exports.restaurantConfigSchema = restaurantConfigSchema