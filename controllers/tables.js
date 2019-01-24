const tablesRepo = require('../repositories/tablesRepo');

// tablesRepo.addTable({ number: 67, seats: 13 })
//     .then(() => {

//         console.log('good tabls9');

//     }).catch(() => {

//         console.log('error tables9');

//     })

exports.addTable = (req, res) => {

    tablesRepo.addTable({ number: req.body.number, seats: req.body.seats })
        .then(result => {
            console.log(result);


        }).catch(err => {
            console.log(err);

        })
};

exports.getTables = async (req, res) => {
    return await tablesRepo.getTables()
        .then(tables => {
            console.log(tables);

            return tables;
        })
        .catch(err => {
            console.log(err);

        })
}