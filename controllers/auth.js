const users = require('../models/users');

exports.loginUser = (req, res) => {

    let mail = req.body.mail;
    let password = req.body.password;

    users.verify(mail, password).then(result => {
        if (result.isValid) {
            req.session.isLogged = true;
            req.session.name = mail;
            req.session.isAdmin = result.admin;
            res.redirect('/');
        }
        else {
            req.flash('error-login', 'Złe hasło lub login')
            res.redirect('/login');
        }
    })
}

exports.registerUser = (req, res) => {
    let data = req.body;

    if (data.password !== data.password2) {
        req.flash('error-registration', 'Hasła nie są identyczne')
        res.redirect('/registration');
        return;
    }

    users.addUser(data.firstName, data.lastName, data.mail, data.tel, data.password).then(result => {
        if (result.isAdded) {
            req.flash('accountCreated', 'Konto zostało utworzone.')
            res.redirect('/login');
        }
        else {
            req.flash('error-registration', 'Konto już istnieje.')
            res.redirect('/registration');
        }
    });
}

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
        }
        res.redirect('/');
    })
}