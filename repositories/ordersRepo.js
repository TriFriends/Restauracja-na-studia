const TableModel = require('../models/tables').Table

class OrderRepo {
    static addOrder(number, order) {
        console.log(order)
        return new Promise((resolve, reject) => {
            TableModel.update({ number },
                {
                    $push: {
                        reservations: order.order
                    }
                },
                (err, raw) => {
                    if (err || raw.n == 0) {
                        console.log(raw)
                        reject()
                    }
                    resolve()
                }
            )
        })
    }

    static findOrdersByDate(date) {
        return new Promise((resolve, reject) => {
            TableModel.find({ date }, (err, tables) => {
                if (err) {
                    reject()
                }
                resolve(tables)
            })
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