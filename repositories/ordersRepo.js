const TableModel = require('../models/tables').Table

class OrderRepo {
    static addOrder(number, order) {
        console.log(order, '22')
        return new Promise((resolve, reject) => {
            TableModel.update({ number },
                {
                    $push: {
                        reservations: order
                    }
                },
                (err, raw) => {
                    if (err || raw.n == 0) {
                        console.log(err)
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

    static checkAvaiable(date, time, number) {
        return new Promise((resolve, reject) => {
            console.log(date, time)
            TableModel.findOne({ number }, (err, table) => {
                console.log(table)
                if (table) {
                    for (let i = 0; i < table.reservations.length; i++) {
                        if (table.reservations[i].date == date && table.reservations[i].time == time) {
                            reject()
                        }
                    }
                }
                resolve()
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

    static deleteOrderById(number, id) {
        return new Promise((resolve, reject) => {
            TableModel.updateOne(
                { number },
                { $pull: { reservations: { _id: id } } },
                { safe: true }, (err, obj) => {
                    if (err) {
                        reject()
                    }
                    resolve()
                })
        })
    }

}

module.exports = OrderRepo