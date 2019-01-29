const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

let transporter;
class Mailer {

    static init() {
        transporter = nodemailer.createTransport(sendGridTransport({
            auth: {
                api_key: 'SG.L9wvW2p7Rr2zeTIbVsz7Hw.E4dEMoKVi8mcOO4zqiSzjcW1Pnhk5M224ooJBlls9g8'
            }
        }))
        console.log(transporter);

        return transporter;
    }

    static getTransporter() {
        if (transporter == null) {
            this.init()
        }
        else {
            return transporter;
        }
    }
}

module.exports = Mailer;