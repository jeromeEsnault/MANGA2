const express = require('express'),
    app = express(),
    port = 1989,
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser');


// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    adminLayout: 'adminLayout'
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


const ROUTER = require('./API/router');
app.use('/', ROUTER)

app.listen(port, () => {
    console.log('le serveur tourne sur :' + port);
})