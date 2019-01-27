const menuRepo = require('../repositories/menuRepo')
const tablesRepo = require('../repositories/tablesRepo')
const configRepo = require('../repositories/restaurantConfigRepo');
const usersRepo = require('../repositories/usersRepo');
const dateFormat = require('../utils/date')
const contactRepo = require('../repositories/contactRepo');


exports.getStartPage = async (req, res) => {

    let error = req.flash('error-index');
    if (error.length <= 0) {
        error = null;
    }

    let selected = req.flash('selected-index');
    if (selected.length <= 0) {
        selected = undefined;
    }

    let id;

    if (selected) {
        id = selected;
    }
    else {
        id = req.body.id;
    }
    let last = Number(req.body.last);

    if (!last) {
        last = 0;

    }

    if (req.body.day)
        last += Number(req.body.day);

    let lastFlash = req.flash('last-index');
    if (lastFlash.length > 0) {
        console.log(lastFlash + '  lldddd');

        last = Number(lastFlash);
    }
    // console.log(id, ' ', last, ' ', selected);

    let selectedTable;

    if (id) {


        selectedTable = await tablesRepo.getTable(id)
            .then(table => {
                // console.log(table);

                return table;

            }).catch(() => {
                console.log('errrrrrrrrrrrrrrrrr');

            })

    }

    tablesRepo.getTables()
        .then(tables => {
            if (id) {
                for (let t of tables) {

                    if (t.number == selectedTable.number) {
                        t.selected = true;

                    }
                }
            }
            tables = tables.sort((a, b) => a.number - b.number)



            let context = {
                tables: tables,
                isAdmin: req.session.isAdmin,
                error: error,
                last: 0
            }

            if (id) {

                // let config = await configRepo.getAll();
                // console.log();

                context.isSelected = true;
                context.date = dateFormat.getDateAfterDay(dateFormat.getCurrentDate(), last);
                context.reservations = selectedTable.reservations;
                context.open = 11;
                context.close = 22;
                context.tableId = id;
                context.tableNumber = selectedTable.number;
                context.last = last;
                context.email = req.session.email;

            }

            res.render('index.hbs', context)


        }).catch(err => {
            res.send(err + 'PROBLEM Z SERWEREM');

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

    contactRepo.getAll()
        .then(contact => {
            console.log(contact);
            let context = {
                contact: contact[0],
                isAdmin: req.session.isAdmin
            }
            res.render('contact.hbs', context);
        })
        .catch(() => {

        })

}

exports.getAdminPage = (req, res) => {

    usersRepo.findUsers()
        .then((users) => {

            res.render('admin.hbs', { users: users });
        })
        .catch(() => {
            res.redirect('/');
        })

}