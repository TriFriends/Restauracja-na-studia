const User = require('../models/users').User
const Contact = require('../models/contact').Contact
const RestaurantConfig = require('../models/restaurantConfig').RestaurantConfig

//Wywołujemy ją podaczas startu aplikacji w celu wprowadzenia 
//domyślnych danych do bazy danych
class OnInit {

    //Sprawdza czy w kolekcji users istnieje przynajmniej 1 użytkownik o typie Administrator
    //jeśli nie to go dodaje
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

    //Sprawdza czy w kolekcji restaurantConfigs istnieje przynajmniej 1 dokument
    //jeśli nie to go dodaje
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

    //Sprawdza czy w kolekcji contacts istnieje przynajmniej 1 dokument
    //jeśli nie to go dodaje
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