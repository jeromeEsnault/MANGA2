const mongoose = require('mongoose')
const Manga = require('./Manga')
const Schema = mongoose.Schema

const tomeSchema = new mongoose.Schema({
    mangaID: {
        type: Schema.Types.ObjectId,
        ref: 'manga'
    },


    volume: {
        Number
    },
    description: {
        String
    },
    dateDeParution: {
        Number
    },
    dessin: {
        String
    },
    illustration: {
        String
    },
    Scenariste: {
        String
    },
    Traducteur: {
        String
    },
    EditeurVF: {
        String
    },
    EditeurVO: {
        String
    },
    prepublication: {
        String
    },
    origine: {
        String
    },
    dateCreate: {
        Date
    },
    dateEdit: {
        Date
    }
});


const Tome = mongoose.model('tome', tomeSchema)

module.exports = Tome