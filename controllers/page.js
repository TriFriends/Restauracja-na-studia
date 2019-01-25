const menuRepo = require('../repositories/menuRepo')
const tablesRepo = require('../repositories/tablesRepo')

exports.getStartPage = (req, res) => {

    let error = req.flash('error-index');
    if (error.length <= 0) {
        error = null;
    }

    tablesRepo.getTables()
        .then(tables => {
            res.render('index.hbs', {
                tables: tables,
                isAdmin: req.session.isAdmin,
                error: error

            })
        }).catch(err => {
            res.send('PROBLEM Z SERWEREM');

        })

}

exports.getLoginPage = (req, res) => {
    let error = req.flash('error-login');
    let message = req.flash('accountCreated');

    if (error.length <= 0) {
        error = null;
    }

    if (message.length <= 0) {
        message = null;
    }
    res.render('login.hbs', { error: error, accountCreated: message });
}

exports.getMenuPage = (req, res) => {
    let error = req.flash('error-menu');
    if (error.length <= 0) {
        error = null;
    }

    menuRepo.getAll()
        .then(result => {
            let context = {
                dishes: result,
                isAdmin: req.session.isAdmin,
                error: error
            }
            res.render('menu.hbs', context);
        })

}

exports.getRegistrationPage = (req, res) => {
    let error = req.flash('error-registration');
    if (error.length <= 0) {
        error = null;
    }

    res.render('registration.hbs', { error: error });
}

exports.getResetPasswordPage = (req, res) => {
    res.render('resetPassword.hbs');
}

exports.getContactPage = (req, res) => {
    res.render('contact.hbs');
}