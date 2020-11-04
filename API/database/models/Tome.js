const mongoose = require('mongoose')
const Manga = require('./Manga')
const Schema = mongoose.Schema

const TomeSchema = new mongoose.Schema({
    mangaID: {
        type: Schema.Types.ObjectId,
        ref: 'manga'
    },
    name: {
        type: String
    },
    volume: {
        type: Number
    },
    description: {
        type: String
    },
    dateDeParution: {
        type: Number
    },
    dessin: {
        type: String
    },
    illustration: {
        type: String
    },
    Scenariste: {
        type: String
    },
    Traducteur: {
        type: String
    },
    EditeurVF: {
        type: String
    },
    EditeurVO: {
        type: String
    },
    prepublication: {
        type: String
    },
    origine: {
        type: String
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    },
    dateEdit: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        default: '/img/imgDefault/imgmanga.jpg'
    }
});


const Tome = mongoose.model('Tome', TomeSchema)

module.exports = Tome