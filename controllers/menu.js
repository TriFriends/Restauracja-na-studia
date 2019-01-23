const menu = require('../models/menu');

exports.deleteDish = (req, res) => {

    menu.deleteDish(req.body.id).then(() => {
        res.redirect('/menu');
    })

}

exports.addDish = (req, res) => {

    menu.addDish(req.body.name, req.body.price).then(() => {
        res.redirect('/menu');
    })

}

exports.editDish = (req, res) => {
    console.log(req.body);

    menu.editDish(req.body.id, req.body.name, req.body.price).then(() => {
        res.redirect('/menu');
    })

}