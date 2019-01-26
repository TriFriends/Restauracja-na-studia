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

    static getTable(id) {
        return new Promise((resolve, reject) => {
            TableModel.findOne({ _id: id }, (err, table) => {
                if (err) {
                    reject()
                }
                resolve(table)
            })
        })
    }

    static getTableByNumber(number) {
        return new Promise((resolve, reject) => {
            TableModel.findOne({ number }, (err, table) => {
                if (err) {
                    reject()
                }
                resolve(table)
            })
        })
    }

    static addTable(table) {
        return new Promise((resolve, reject) => {
            TableModel.create(table, (err, created) => {
                if (err || !created) {
                    console.log(err)
                    reject()
                }
                resolve()
            })
        })
    }

    static deleteById(id) {
        return new Promise((resolve, reject) => {
            TableModel.deleteOne({ _id: id }, (err) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }

    static updateById(id, toUpdate) {
        return new Promise((resolve, reject) => {
            TableModel.update({ _id: id },
                { $set: toUpdate },
                (err, raw) => {
                    console.log(raw)
                    if (err || raw.n == 0) {
                        reject()
                    }
                    resolve()
                }
            )
        })
    }
}

module.exports = TableRepo