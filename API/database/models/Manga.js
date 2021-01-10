// dependance appeler
const mongoose = require('mongoose');
const { format } = require('sharp');
const Schema = mongoose.Schema;
const Tome = require('./Tome');


// model de construction pour la base de donnée
const MangaSchema = new mongoose.Schema({


    titlevo: {
        type: String
    },
    titlevf: {
        type: String
    },
    author: {
        type: String
    },
    dateEdit: {
        type: Date,
        default: new Date()
    },
    dateCreate: {
        type: Date,
        default: new Date()
    },
    nameType: {
        type: String
    },
    image: { //ok
        type: String,
        default: '/img/imgDefault/imgmanga.jpg'
    },
    tome: [{
        type: Schema.Types.ObjectId,
        ref: 'Tome'
    }],
    userID: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

});



const Manga = mongoose.model('Manga', MangaSchema)

module.exports = Manga