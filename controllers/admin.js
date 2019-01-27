
const usersRepo = require('../repositories/usersRepo')

exports.deleteUser = (req, res) => {
    console.log(req.body);

    usersRepo.deleteUserById(req.body.id)
        .then(() => {
            res.redirect('/admin');
        })
        .catch(() => {
            console.log('erererer');

        });

}