const mongoose = require('mongoose')
const Manga = require('./Manga')
const Schema = mongoose.Schema


const genreSchema = new mongoose.Schema({
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


const Genre = mongoose.model('genre', genreSchema)

module.exports = Genre