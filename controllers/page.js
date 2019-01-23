const menu = require('../repositories/menuRepo')


exports.getStartPage = (req, res) => {
    res.render('index.hbs')
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
    menu.getAll()
        .then(result => {
            let context = {
                dishes: result,
                isAdmin: req.session.isAdmin
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