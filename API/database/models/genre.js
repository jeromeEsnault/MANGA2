const mongoose = require('mongoose')
const Schema = mongoose.Schema


const genreSchema = new mongoose.Schema({

    nameGenre: {
        type: String
    },
    dateCreate: {
        type: Date
    }

});


const Genre = mongoose.model('genre', genreSchema)

module.exports = Genre