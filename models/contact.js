const mongoose = require('mongoose')
const Schema = mongoose.Schema

let contactSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    street: {
        type: String
    }
})

const Contact = mongoose.model('Contact', contactSchema)

exports.Contact = Contact
exports.contactSchema = contactSchema