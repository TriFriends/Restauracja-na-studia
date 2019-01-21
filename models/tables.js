var Datastore = require('nedb')



class Tables {
    constructor() {
        this.tables = [];
        this.db = new Datastore({
            filename: 'data/tables.db',
            autoload: true
        });
    }

    addTable(seats) {

    }
}