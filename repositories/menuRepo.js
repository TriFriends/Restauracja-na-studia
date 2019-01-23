const MenuModel = require('../models/menu').Menu

class MenuRepository {

    static getAll() {
        return new Promise((resolve, reject) => {
            MenuModel.find({}, (err, menus) => {
                if (err) {
                    console.log(err);

                    reject()
                }
                resolve(menus)
            })
        })
    }

    static createOrUpdate(id, toUpdate) {
        return new Promise((reolve, reject) => {
            MenuModel.findByIdAndUpdate(id, toUpdate, { upsert: true, setDefaultsOnInsert: false }, (err, doc) => {
                if (err) {
                    reject()
                }
                resolve(doc)
            })
        })
    }

    static delete(id) {
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