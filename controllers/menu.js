const menu = require('../repositories/menuRepo');

exports.deleteDish = (req, res) => {

    menu.deleteById(req.body.id).then(() => {
        res.redirect('/menu');
    }).catch(err => {
        req.flash('error-menu', 'Wprowadzono dane w nieprawidłowym formacie');
        res.redirect('/menu');
    })

}

exports.addDish = (req, res) => {

    menu.insert({ name: req.body.name, price: parseFloat(req.body.price) }).then(result => {
        res.redirect('/menu');
    }).catch(err => {
        req.flash('error-menu', 'Wprowadzono dane w nieprawidłowym formacie');
        res.redirect('/menu');
    })


}

exports.editDish = (req, res) => {

    menu.updateById(req.body.id, { name: req.body.name, price: parseFloat(req.body.price) }).then(result => {
        res.redirect('/menu');
    }).catch(err => {
        req.flash('error-menu', 'Wprowadzono dane w nieprawidłowym formacie');
        res.redirect('/menu');
    })

}