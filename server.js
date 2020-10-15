const express = require('express'),
    app = express(),
    port = 1989,
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    //bcrypt = require('bcrypt'),
    //flash = require('connect-flash'),
    //mongostore = require('connect-mongo'),
    //upload = require('express-fileupload'),
    //exhbs = require('express-handlebars'),
    //session = require('express-session'),
    handlebars = require('handlebars'),
    handlebarshelpers = require('handlebars-helpers'),
    handlebarsmoment = require('handlebars.moment');



// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    adminLayout: 'adminLayout'
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// mongoose
const mongoose = require('mongoose');
require('dotenv').config()

const connect = mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});


app.use(express.static('public'));

const ROUTER = require('./API/router');
app.use('/', ROUTER)



app.listen(port, () => {
    console.log('le serveur tourne sur :' + port);
})