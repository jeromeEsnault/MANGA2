const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Arc = require('./Arc')

const MangaSchema = new mongoose.Schema({

    nameVO: {
        type: String
    },
    nameVF: {
        type: String
    },
    author: {
        type: String
    },
    arc: [{
        type: Schema.Types.ObjectId,
        ref: 'Arc'
    }]

});


const Manga = mongoose.model('Manga', MangaSchema)

module.exports = Manga