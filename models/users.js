const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
})

userSchema.methods.comparePassword = function (passwordToCheck) {
    bcrypt.compare(passwordToCheck, this.password, function (err, isMatch) {
        if (err) {
            return false
        }
        return true
    })
}

userSchema.pre('save', (next) => {
    const user = this
    if (!user.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(3, (err, salt) => {
        if (err) {
            return next(err)
        }

        bcrypt.hash(user.password, salt, (err, hashed) => {
            if (err) {
                return next(err)
            }
            user.password = hashed
            next()
        })
    })
})

const User = mongoose.model('User', userSchema)



exports.User = User
exports.userSchema = userSchema
