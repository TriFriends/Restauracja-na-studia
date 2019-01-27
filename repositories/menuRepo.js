const MenuModel = require('../models/menu').Menu

class MenuRepository {

    static getAll() {
        return new Promise((resolve, reject) => {
            MenuModel.find({}, (err, menus) => {
                if (err) {
                    reject()
                }
                resolve(menus)
            })
        })
    }

    static updateById(id, doc) {
        return new Promise((resolve, reject) => {
            MenuModel.updateOne({ _id: id }, doc, (err, raw) => {
                if (err || raw.n == 0) {
                    reject()
                }
                resolve()
            })
        })
    }

    static insert(doc) {
        return new Promise((resolve, reject) => {
            MenuModel.create(doc, (err, menu) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }

    static deleteById(id) {
        return new Promise((resolve, reject) => {
            MenuModel.findOneAndRemove({ _id: id }, (err) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }
}

module.exports = MenuRepository
