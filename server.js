//=====================================================
//        1 DEPENDENCE DE EXPRESS POUR LE FONT
//=====================================================
const express = require('express'),
    app = express(),
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    port = 1989;

//=====================================================
//        2  DEPENDENSE DE CONNECTION DB
//=====================================================
// mongoose
const mongoose = require('mongoose'),
    MongoStore = require('connect-mongo');

//=====================================================
//        3  DEPENDENSE POUR SESSION
//=====================================================

const expressSession = require('express-session'),
    dateFormat = require('date-format'),

    //=====================================================
    //        4  DEPENDENSE DE CONNECTION DB
    //=====================================================


    //flash = require('connect-flash'),
    //upload = require('express-fileupload'),

    methodOverride = require('method-override'),
    handlebars = require('handlebars'),
    handlebarshelpers = require('handlebars-helpers');
//=====================================================
//          5 DEPENDENSE DE TEST
//=====================================================
const chai = require('chai'),
    // expressOasGenerator = require('express-oas-generator'),
    swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./test/swagger/swagger.json');
//expressOasGenerator.init(app, {})
//=====================================================
//          6   RECUPERATION DES ROUTE
//=====================================================

const ROUTER = require('./API/router');

//=====================================================
//              A VOIR
//=====================================================

//handlebarsmoment = require('handlebars.moment');
//handlebarsmoment.registerHelpers(handlebars)

//=====================================================
//              LECTURE DES DEPENDANCE
//=====================================================

// POUR FICHIER DE SECU DE DONNEE .ENV
require('dotenv').config()

//=====================================================
app.use(methodOverride('_method'))
// Express-session
// Mongoose
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('Connecter a MongoDB'))
    .catch(err => console.log(err))
//=====================================================
//=====================================================

const { stripTags, limit } = require('./API/helper/hbs');

// Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    //helpers: {
    //   stripTags: stripTags,
    //    limit: limit
    // },
    extname: 'hbs',
    defaultLayout: 'main',
    adminLayout: 'adminLayout'
}));

const mongoStore = MongoStore(expressSession);
// Express-session
app.use(expressSession({
    secret: 'securite',
    maxAge: 150,
    domain:"",
    expire:"",
    httpOnly:"",
    path:"/",
    name: 'cookie-sess',
    saveUninitialized: true,
    resave: false,
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', ROUTER)

/*app.use('*', (req, res) => {
    res.send('Erreur 404')
})}*/

app.listen(port, () => {
    console.log('le serveur tourne sur :' + port);
})

module.exports = app