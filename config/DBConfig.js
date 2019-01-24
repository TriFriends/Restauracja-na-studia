const mongoose = require('mongoose')
const onInit = require('./onInit')


class DBConfig {
    constructor(MONGODB_URI) {
        this.MONGODB_URI = MONGODB_URI
    }
    connect() {
        mongoose.connect(this.MONGODB_URI, { useNewUrlParser: true }, (err) => {
            if (err) {
                console.log(err)
                process.exit(1)
            }
            console.log(`[MONGODB] Connected to instance on ${this.MONGODB_URI}`)
            onInit()
        });
    }
}

module.exports = DBConfig
