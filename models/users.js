var Datastore = require('nedb')

var db = new Datastore({
    filename: 'data/users.db',
    autoload: true
});


class User {
    constructor() {

    }
}

class Users {
    constructor() {

    }

    verify(mail, password) {
        const promise = new Promise((resolve, reject) => {
            db.findOne({ mail: mail }, (err, doc) => {
                if (err) {
                    reject('error');
                }
                if (doc) {
                    if (doc.password == password) {
                        resolve({ isValid: true, admin: doc.admin })
                    }
                }
                resolve({ isValid: false })

            });
        });

        return promise;

    }

    addUser(firstName, lastName, mail, tel, password) {
        let user = {
            firstName: firstName,
            lastName: lastName,
            mail: mail,
            tel: tel,
            password: password,
            admin: false
        }

        const promise = new Promise((resolve, reject) => {
            db.findOne({ mail: mail }, (err, doc) => {
                if (err) {
                    console.log(err);
                    reject('error')
                }

                if (!doc) {
                    db.insert(user, (err, doc) => {
                        if (err) {
                            console.log(err);
                            reject('error')
                        }
                        else {
                            resolve({ isAdded: true })
                        }

                    })
                }
                else {
                    resolve({ isAdded: false })
                }
            });
        });

        return promise;
    }
}


module.exports = new Users();