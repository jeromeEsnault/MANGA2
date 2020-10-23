const mongoose = require('mongoose')
const Manga = require('./Manga')
const Schema = mongoose.Schema


const GenreSchema = new mongoose.Schema({
    mangaID: {
        type: Schema.Types.ObjectId,
        ref: 'manga'
    },

    nameGenre: {
        type: String
    },
    dateCreate: {
        type: Date
    }

});


const Genre = mongoose.model('Genre', GenreSchema)

module.exports = Genre