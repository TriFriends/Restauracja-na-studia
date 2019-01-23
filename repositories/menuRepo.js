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

    static createOrUpdateById(id, toUpdate) {
        return new Promise((reolve, reject) => {
            MenuModel.update({ _id: id }, toUpdate, { upsert: true, setDefaultsOnInsert: false }, (err, doc) => {
                if (err) {
                    reject()
                }
                resolve(doc)
            })
        })
    }

    static deleteById(id) {
        return new Promise((resolve, reject) => {
            MenuModel.findByIdAndDelete(id, (err) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }
}

module.exports = MenuRepository