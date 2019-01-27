const ordersRepo = require('../repositories/ordersRepo');
const usersRepo = require('../repositories/usersRepo')

exports.order = (req, res) => {

    let time = req.body.time;
    let date = req.body.date;
    let email = req.session.email;
    let table = req.body.tableNumber;
    let tableId = req.body.tableId;
    let last = req.body.last;

    //Tutaj musisz jeszcze wywołać metodę usersRepo.findUserByEmail i tutaj jest wystąpi coś nietypowego:
    //gdy wystąpi catch to masz dodać do bazy danych użytkownika, jeśli wystąpi then to wtedy masz wywołać:
    //że konto już istnieje
    //Przykład:
    req.flash('selected-index', tableId);
    req.flash('last-index', last);
    //ordersRepo.checkAvaiable(date, time, table).then(() => {
        usersRepo.findUserByEmail(email).then((user) => {
            ordersRepo.addOrder(table, { user, date, time }).then(() => {
                res.redirect('/');
            }).catch(() => {
                res.status(400).send('n1')
            })
        }).catch(() => {
            res.status(400).send('n2')
        })
    // }).catch((err) => {
    //     //console.log('errr', err);

    //     res.redirect('/?a=2');
    // })


}