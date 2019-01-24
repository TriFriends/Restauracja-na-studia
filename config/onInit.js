const User = require('../models/users').User
const Contact = require('../models/contact').Contact
const RestaurantConfig = require('../models/restaurantConfig').RestaurantConfig

module.exports = () => {
    User.find({ admin: true }, (err, results) => {
        if (!results) {
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

    Contact.countDocuments({}, (err, count) => {
        if (err) {
            console.log(err)
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

    RestaurantConfig.countDocuments({}, (err, count) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        if (count == 0) {
            RestaurantConfig.create({
                open: '11',
                close: '22'
            })
        }
    })
}