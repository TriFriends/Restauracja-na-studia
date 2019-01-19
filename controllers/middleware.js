

exports.ensureisLogged = (req, res, next) => {

    if (req.session.isLoged) {
        next();
    }
    else {
        req.flash('error-login', 'Musisz być zalogowaany')
        res.redirect('/login');
    }
}


exports.ensureIsAdmin = (req, res, next) => {

    if (req.session.isAdmin) {
        next();
    }
    else {
        req.flash('error-login', 'Musisz być Administratorem')
        res.redirect('/login');
    }
}


