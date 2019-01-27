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
            TableModel.find({
                'reservations.date': date,
                'reservations.time': time,
                number
            }, (err, result) => {
                if (err) {
                    reject()
                }
                if (result.length != 0) {
                    for (let i = 0; i < result.length; i++) {
                        for (let k = 0; k < result[i].reservations.length; k++) {
                            if (
                                result[i].reservations[k].time == time &&
                                result[i].reservations[k].date == date &&
                                result[i].number == number
                            ) {
                                reject()
                            }
                        }
                    }
                    resolve()
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