const ContactModel = require('../models/contact').Contact

class ContactRepo {

    static getAll() {
        return new Promise((resolve, reject) => {
            ContactModel.find({}, (err, contact) => {
                if (err) {
                    reject()
                }
                resolve(contact)
            })
        })
    }

    static update(id, doc) {
        return new Promise((resolve, reject) => {
            ContactModel.updateOne({ _id: id }, doc, (err, raw) => {
                if (err || raw.n == 0) {
                    reject()
                }
                resolve()
            })
        })
    }
}

module.exports = ContactRepo