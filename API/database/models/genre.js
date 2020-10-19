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


const Genre = mongoose.model('type', genreSchema)

module.exports = Genre