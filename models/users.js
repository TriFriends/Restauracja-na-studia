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
        required: true
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

// userSchema.methods.comparePassword = async function (passwordToCheck) {
//     return await bcrypt.compare(passwordToCheck, this.password, function (err, isMatch) {
//         if (err || !isMatch) {
//             console.log(err, '36');

//             return false
//         }
//         console.log(isMatch, '40');
//         return true
//     })
// }

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}


userSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) return next();
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
