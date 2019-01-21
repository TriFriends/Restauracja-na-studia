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

    static createOrUpdate(name, updated) {
        return new Promise((reolve, reject) => {
            MenuModel.findOneAndUpdate({ name }, updated, { upsert: true, setDefaultsOnInsert: false }, (err, doc) => {
                if (err) {
                    reject()
                }
                resolve(doc)
            })
        })
    }

    static delete(name) {
        return new Promise((resolve, reject) => {
            MenuModel.deleteOne({ name }, (err) => {
                if (err) {
                    reject()
                }
                resolve()
            })
        })
    }
}

module.exports = MenuRepository