var Datastore = require('nedb')


class Table {
    constructor(seats) {
        this.seats = seats;
        this.reserved = false;
    }

    getSeats() {
        return this.seats;
    }

    isBooked() {
        return this.reserved;
    }
}


class Tables {
    constructor() {
        this.tables = [];
        this.db = new Datastore({
            filename: 'data/tables.db',
            autoload: true
        });
    }

    import() {

    }

    export() {

    }

    addTable(seats) {

    }
}