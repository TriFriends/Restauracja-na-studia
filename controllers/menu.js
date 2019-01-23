const menu = require('../repositories/menuRepo');

exports.deleteDish = (req, res) => {

    menu.deleteById(req.body.id).then(() => {
        res.redirect('/menu');
    }).catch(err => {
        console.log(err)
    })

}

exports.addDish = (req, res) => {
    console.log(req.body);

    menu.insert({ name: req.body.name, price: parseFloat(req.body.price) }).then(result => {
        res.redirect('/menu');
    }).catch(err => {
        console.log(err)
    })


}

exports.editDish = (req, res) => {

    menu.UpdateById(req.body.id, { name: req.body.name, price: req.body.price }).then(result => {
        res.redirect('/menu');
    }).catch(err => {
        console.log(err);

    })

}