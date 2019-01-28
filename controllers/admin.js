
const usersRepo = require('../repositories/usersRepo')
const configRepo = require('../repositories/restaurantConfigRepo')
exports.deleteUser = (req, res) => {
    console.log(req.body);

    usersRepo.deleteUserById(req.body.id)
        .then(() => {
            res.redirect('/admin');
        })
        .catch(() => {
            console.log('erererer');
            res.redirect('/admin');
        });

}

exports.config = (req, res) => {
    configRepo.update(req.body.id, { open: req.body.open, close: req.body.close, maxDayAhead: req.body.maxDayAhead })
        .then(() => {
            res.redirect('/admin');
        })
        .catch(() => {
            res.redirect('/admin');
        })
}