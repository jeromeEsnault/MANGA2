const mongoose = require('mongoose')
const Schema = mongoose.Schema


const typeSchema = new mongoose.Schema({

    nameType: {
        type: String
    },
    dateCreate: {
        type: Date
    }

});


const Type = mongoose.model('type', typeSchema)

module.exports = Type