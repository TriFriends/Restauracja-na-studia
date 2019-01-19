const menu = require('../models/menu');

exports.deleteDish = (req, res) => {

    menu.deleteDish(req.body.id).then(() => {
        res.redirect('/menu');
    })

}