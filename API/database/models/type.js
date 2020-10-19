const mongoose = require('mongoose')
const Schema = mongoose.Schema


const typeSchema = new mongoose.Schema({

    name: {
        String
    },
    dateCreate: {
        Date
    }

});


const Type = mongoose.model('type', typeSchema)

module.exports = Type