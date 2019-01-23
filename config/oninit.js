const User = require('../models/users').User

module.exports = () => {
    User.find({ admin: true }, (err, results) => {
        //console.log(err, results);

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