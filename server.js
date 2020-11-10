const express = require('express'),
    app = express(),
    port = 1989,
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    { stripTags, limit } = require('./API/helper/hbs'),
    //flash = require('connect-flash'),
    MongoStore = require('connect-mongo'),
    //upload = require('express-fileupload'),
    expressSession = require('express-session'),
    methodOverride = require('method-override'),
    handlebars = require('handlebars'),
    handlebarshelpers = require('handlebars-helpers');
const chai = require('chai');

//handlebarsmoment = require('handlebars.moment');

//handlebarsmoment.registerHelpers(handlebars)

// Swagger
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./test/swagger/swagger.json');

require('dotenv').config()
app.use(methodOverride('_method'))

// mongoose
const mongoose = require('mongoose');
// Express-session// Mongoose
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('Connecter a MongoDB'))
    .catch(err => console.log(err))

// save session avec MongoDB
const mongoStore = MongoStore(expressSession)

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

// Express-session
app.use(expressSession({
    secret: 'securite',
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

const ROUTER = require('./API/router');
app.use('/', ROUTER)

//app.use('*', (req, res) => {
//    res.send('Erreur 404')
//})

app.listen(port, () => {
    console.log('le serveur tourne sur :' + port);
})

module.exports = app