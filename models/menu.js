var Datastore = require('nedb')

var db = new Datastore({
    filename: 'data/menu.db',
    autoload: true
});


class Menu {

    static getMenuList() {
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

    static async addDish(name, price) {
        let doc = {
            name: name,
            price: price

        };

        return await db.insert(doc, function (err, newDoc) {
            if (err) {
                console.log(err);
                return false;
            }
            else {
                return true;
            }
        });
    }

    static deleteDish(id) {
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

// Menu.addDish('Pizza', 20.45);
// Menu.addDish('Zupa Pomidorowa', 12.00);
// Menu.addDish('Pierogi Ruskie', 15.99);
// Menu.addDish('Spaghetti', 10.75);

module.exports = Menu;