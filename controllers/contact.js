const contactRepo = require('../repositories/contactRepo');

exports.update = (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let phone = req.body.phone;
    let street = req.body.street;

    console.log(req.body);


    contactRepo.update(req.body.id, { firstname: firstname, lastname: lastname, email: email, phone: phone, street: street })
        .then(() => {
            req.flash('message-contact', 'Zapisano zmiany!')
            res.redirect('/contact');
        })
        .catch(() => {

        })
}