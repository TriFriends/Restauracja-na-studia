const UsersModel = require('../models/users').User


class UserRepo {
    static addUser(user) {
        return new Promise((resolve, reject) => {
            UsersModel.create(user, (err, created) => {
                if (err) {
<<<<<<< HEAD
                    console.log(err)
=======
                    console.log(err);

>>>>>>> e90645a46a193da502ac2c3731f23e45a382fb78
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
<<<<<<< HEAD
                if (err || !user) {
=======
                console.log(user, '32');

                if (err || user == null) {
                    console.log(err)
>>>>>>> e90645a46a193da502ac2c3731f23e45a382fb78
                    reject()
                }
                console.log(user)
                resolve(user)
            })
        })
    }

}

module.exports = UserRepo