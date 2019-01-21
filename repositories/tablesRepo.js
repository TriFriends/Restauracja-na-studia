const TableModel = require('../models/tables').Table

class TableRepo {
    static getTables() {
        return new Promise((resolve, reject) => {
            TableModel.find({}, (err, tables) => {
                if (err) {
                    reject()
                }
                resolve(tables)
            })
        })
    }

    static insertTable(table) {
        return new Promise((resolve, reject) => {
            table.reservations = []
            TableModel.create(table, (err, created) => {
                if (err || !created) {
                    reject()
                }
                resolve()
            })
        })
    }

    static deleteTableByNumber(number) {
        return new Promise((resolve, reject) => {
            TableModel.deleteOne({ number }, (err) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }

    static updateByNumber(number, toUpdate) {
        return new Promise((resolve, reject) => {
            TableModel.update({ number },
                { $set: toUpdate },
                (err, count) => {
                    if (err || count == 0) {
                        reject()
                    }
                    resolve()
                }
            )
        })
    }

}

module.exports = TableRepo