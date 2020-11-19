const mongoose = require('mongoose')
const Manga = require('./Manga')
const Schema = mongoose.Schema

const TomeSchema = new mongoose.Schema({
    mangaID: { //ok
        type: Schema.Types.ObjectId,
        ref: 'manga'
    },
    userID: { //ok
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: { //pour array
        type: String
    },
    volume: { // ok
        type: Number
    },
    description: { // ok
        type: String
    },
    dateDeParution: { //ok
        type: Number
    },
    dessin: { // ok
        type: String
    },
    illustration: {
        type: String
    },
    Scenariste: { //ok
        type: String
    },
    Traducteur: { //ok
        type: String
    },
    EditeurVF: { //ok
        type: String
    },
    EditeurVO: { //ok
        type: String
    },
    prepublication: { //ok
        type: String
    },
    origine: { //ok
        type: String
    },
    dateCreate: { //ok ne pas ajouter a put
        type: Date,
        default: Date.now()
    },
    dateEdit: { //ok
        type: Date,
        default: Date.now()
    },
    image: { //ok
        type: String,
        default: '/img/imgDefault/imgmanga.jpg'
    }
});


const Tome = mongoose.model('Tome', TomeSchema)

module.exports = Tome