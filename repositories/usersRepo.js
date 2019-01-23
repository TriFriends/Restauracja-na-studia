const UsersModel = require('../models/users').User


class UserRepo {
    static addUser(user) {
        return new Promise((resolve, reject) => {
            UsersModel.create(user, (err, created) => {
                if (err) {
                    console.log(err)
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

    static findUserByEmail(email) {
        return new Promise((resolve, reject) => {
            UsersModel.findOne({ email }, (err, user) => {
                if (err || !user) {
                    reject()
                }
                resolve(user)
            })
        })
    }

}

module.exports = UserRepo