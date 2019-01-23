const mongoose = require('mongoose')
const onInit = require('./onInit')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`[MONGODB] Connected to instance on ${MONGODB_URI}`)
    onInit()
});
