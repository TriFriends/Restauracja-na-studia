const UsersModel = require('../models/users').User


class UserRepo {
    static addUser(user) {
        return new Promise((resolve, reject) => {
            UsersModel.create(user, (err, created) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }
}

module.exports = UserRepo