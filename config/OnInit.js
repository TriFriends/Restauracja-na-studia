const User = require('../models/users').User
const Contact = require('../models/contact').Contact
const RestaurantConfig = require('../models/restaurantConfig').RestaurantConfig

class OnInit {
    static addAdminOnStart() {
        User.find({ admin: true }, (err, results) => {
            if (results.length == 0) {
                User.create({
                    firstname: 'admin',
                    lastname: 'admin',
                    email: 'admin',
                    phone: '',
                    password: 'admin',
                    admin: true
                })
            }
        })
    }
    static addDefaultRestaurantConfigOnStart() {
        RestaurantConfig.countDocuments({}, (err, count) => {
            if (err) {
                process.exit(1)
            }
            if (count == 0) {
                RestaurantConfig.create({
                    open: '11',
                    close: '22',
                    maxDayAhead: 3
                })
            }
        })
    }
    static addDefaultContactOnStart() {
        Contact.countDocuments({}, (err, count) => {
            if (err) {
                process.exit(1)
            }
            if (count == 0) {
                Contact.create({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    street: ''
                })
            }
        })
    }
}

module.exports = OnInit