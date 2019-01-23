const User = require('../models/users').User

export default () => {
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
}