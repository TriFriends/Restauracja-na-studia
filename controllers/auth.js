const usersRepo = require('../repositories/usersRepo');

exports.loginUser = (req, res) => {

    let email = req.body.mail;
    let password = req.body.password;

    users.findUserByEmail(email).then(result => {
        result.comparePassword(password, (err, isMatch) => {
            if (err || !isMatch) {
                req.flash('error-login', 'Złe hasło lub login')
                res.redirect('/login');
            }
            else {
                req.session.isLogged = true;
                req.session.name = result.firstname;
                req.session.isAdmin = result.admin;
                res.redirect('/');
            }


        });
    }).catch(() => {
        req.flash('error-login', 'Złe hasło lub login')
        res.redirect('/login');
    })
}

exports.registerUser = (req, res) => {
    let data = req.body;

    if (data.password !== data.password2) {
        req.flash('error-registration', 'Hasła nie są identyczne')
        res.redirect('/registration');
        return;
    }

    let d = req.body;
    usersRepo.addUser({ firstname: d.firstname, lastname: d.lastname, email: d.email, phone: d.phone, password: d.password }).then(() => {
        req.flash('accountCreated', 'Konto zostało utworzone.')
        res.redirect('/login');
    }).catch(() => {
        req.flash('error-registration', 'Konto już istnieje.')
        res.redirect('/registration');
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