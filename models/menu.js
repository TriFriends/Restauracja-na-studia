var Datastore = require('nedb')

var db = new Datastore({
    filename: 'data/menu.db',
    autoload: true
});

class Dish {

}

class Menu {
    constructor() {

    }

    getMenuList() {
        const promise = new Promise((resolve, reject) => {
            db.find({}, function (err, docs) {
                if (err) {
                    console.log(err);
                    reject()
                }
                else {
                    resolve(docs)
                }
            });
        });

        return promise;
    }

    addDish(name, ingredients, kcal, price) {
        let doc = {
            name: name,
            ingredients: ingredients,
            kcal: kcal,
            price, price

        };

        db.insert(doc, function (err, newDoc) {
            if (err) {
                console.log(err);
                return false;
            }
            else {
                return true;
            }
        });
    }

    deleteDish(id) {
        const promise = new Promise((resolve, reject) => {
            db.remove({ _id: id }, {}, function (err, numRemoved) {
                if (err) {
                    reject('error');
                }
                resolve()
            });
        });
        return promise;
    }
}

module.exports = new Menu();