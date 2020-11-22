// dependance appeler
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Tome = require('./Tome')
const Genre = require('./Genre')


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
        default: Date.now()
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    },
    nameType: {
        type: String
    },
    tome: [{
        type: Schema.Types.ObjectId,
        ref: 'Tome'
    }],
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

    

});



const Manga = mongoose.model('Manga', MangaSchema)

module.exports = Manga