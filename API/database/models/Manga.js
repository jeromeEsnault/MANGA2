const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Tome = require('./tome')
const Type = require('./type')
const Genre = require('./genre')

const MangaSchema = new mongoose.Schema({

    titlevo: {
        String
    },
    titlevf: {
        String
    },
    author: {
        String
    },
    dateEdit: {
        Date
    },
    dateCreate: {
        Date
    },

    tome: [{
        type: Schema.Types.ObjectId,
        ref: 'tome'
    }],
    type: [{
        type: Schema.Types.ObjectId,
        ref: 'type'
    }],
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'genre'
    }]

});


const Manga = mongoose.model('Manga', MangaSchema)

module.exports = Manga