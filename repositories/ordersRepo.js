const TableModel = require('../models/tables').Table

class OrderRepo {
    static addOrder(table_number, order) {
        return new Promise((resolve, reject) => {
            TableModel.update({ number: table_number },
                {
                    $push: {
                        reservations: order
                    }
                },
                (err, raw) => {
                    if (err || raw == 0) {
                        reject()
                    }
                    resolve()
                }
            )
        })
    }

    static findOrders() {
        return new Promise((resolve, reject) => {
            TableModel.find({}, (err, tables) => {
                if (err) {
                    reject()
                }
                let reservations = []
                for (let i = 0; i < tables.length; i++) {
                    for (let k = 0; k < tables[i].reservations.length; k++) {
                        reservations.push(tables[i].reservations[k])
                    }
                }
                resolve(reservations)
            })
        })
    }
}

module.exports = OrderRepo