const menu = require('../repositories/menuRepo');

exports.deleteDish = (req, res) => {

    menu.delete(req.body.id).then(() => {
        res.redirect('/menu');
    })

}

exports.addDish = (req, res) => {
    console.log(req.body);

    menu.createOrUpdate(undefined, { name: req.body.name, price: parseFloat(req.body.price) }).then(result => {
        res.redirect('/menu');
    })


}

exports.editDish = (req, res) => {

    menu.createOrUpdate(req.body.id, { name: req.body.name, price: req.body.price }).then(result => {
        res.redirect('/menu');
    }).catch(err => {
        console.log(err);

    })

}