const menuRepo = require('../repositories/menuRepo')
const tablesRepo = require('../repositories/tablesRepo')
const configRepo = require('../repositories/restaurantConfigRepo');
const dateFormat = require('../utils/date')
exports.getStartPage = async (req, res) => {

    let error = req.flash('error-index');
    if (error.length <= 0) {
        error = null;
    }



    let id = req.body.id;
    let last = Number(req.body.last);
    console.log('LAST   ' + last);

    if (!last) {
        last = 0;

    }

    if (req.body.day)
        last += Number(req.body.day);

    let selectedTable;
    console.log('llast ', last);
    if (id) {


        selectedTable = await tablesRepo.getTable(id)
            .then(table => {
                return table;

            }).catch(() => {
                console.log('errrrrrrrrrrrrrrrrr');

            })
    }

    tablesRepo.getTables()
        .then(tables => {
            if (id) {
                for (let t of tables) {
                    if (selectedTable._id == t._id) {
                        t.selected = true;
                    }
                }
            }
            // console.log('2s3' + selectedTable.reservations);

            let context = {
                tables: tables,
                isAdmin: req.session.isAdmin,
                error: error,
                last: 0
            }

            if (id) {
                context.isSelected = true;
                context.date = dateFormat.getDateAfterDay(dateFormat.getCurrentDate(), last);
                context.reservations = selectedTable.reservations;
                context.open = 11;
                context.close = 22;
                context.id = id;
                context.last = last;

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
    res.render('contact.hbs');
}