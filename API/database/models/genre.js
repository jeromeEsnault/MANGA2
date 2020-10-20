const mongoose = require('mongoose')
const Schema = mongoose.Schema


const genreSchema = new mongoose.Schema({

    name: {
        String
    },
    dateCreate: {
        Date
    }

});


const Genre = mongoose.model('genre', genreSchema)

module.exports = Genre