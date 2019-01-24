const tablesRepo = require('../repositories/tablesRepo');

tablesRepo.addTable({ number: 1, seats: 3 }).then(result => {

}).catch(err => {
    console.log(err);

})