const RestaurantConfigModel = require('../models/restaurantConfig').RestaurantConfig

class RestaurantConfigRepo {
    static getAll() {
        return new Promise((resolve, reject) => {
            RestaurantConfigModel.find({}, (err, contact) => {
                if (err) {
                    reject()
                }
                resolve(contact)
            })
        })
    }

    static update(id, doc) {
        return new Promise((resolve, reject) => {
            RestaurantConfigModel.updateOne({ _id: id }, doc, (err, raw) => {
                if (err || raw.n == 0) {
                    reject()
                }
                resolve()
            })
        })
    }
}

module.exports = RestaurantConfigRepo