//const OrderModel = require('../models/orders').orderSchema
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
}

module.exports = OrderRepo