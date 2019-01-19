var Datastore = require('nedb')

var db = new Datastore({
    filename: 'data/orders.db',
    autoload: true
});
