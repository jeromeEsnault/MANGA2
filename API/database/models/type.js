const mongoose = require('mongoose')
const Manga = require('./Manga')
const Schema = mongoose.Schema


const typeSchema = new mongoose.Schema({
    mangaID: {
        type: Schema.Types.ObjectId,
        ref: 'manga'
    },

    nameType: {
        type: String
    },
    dateCreate: {
        type: Date
    }

});


const Type = mongoose.model('type', typeSchema)

module.exports = Type