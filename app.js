const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant'
const DBConfig = require('./config/DBConfig')
const PORT = 3000;
const app = express();

let dbConnection = new DBConfig(MONGODB_URI)
dbConnection.connect()

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',
    partialsDir: "views/partials",
}));
app.set('view engine', 'hbs');


app.use(session({
    key: 'restaurant.session.sid',
    secret: 'Lol',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

app.use(flash());

app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    res.locals.name = req.session.name;
    next();
});
const routes = require('./routes/routes')
app.use('/', routes);



app.listen(PORT, () => {
    console.log(`Server started on port`);
});



