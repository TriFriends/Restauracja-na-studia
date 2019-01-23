const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://marcin:marcin18@ds111065.mlab.com:11065/restaurant'

module.exports = () => {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log(`[MONGODB] Connected to instance on ${MONGODB_URI}`)
        require('./oninit')();
    });
}