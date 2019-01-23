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

    static findUsers() {
        return new Promise((resolve, reject) => {
            UsersModel.find({}, (err, docs) => {
                if (err) {
                    reject()
                }
                resolve(docs)
            })
        })
    }

    static findUserById(id) {
        return new Promise((resolve, reject) => {
            UsersModel.findById(id, (err, user) => {
                if (err || !user) {
                    reject()
                }
                resolve(user)
            })
        })
    }

}

module.exports = UserRepo