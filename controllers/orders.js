const ordersRepo = require('../repositories/ordersRepo');


exports.order = (req, res) => {
    console.log(req.body);
    console.log(req.session)

}