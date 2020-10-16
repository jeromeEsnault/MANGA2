const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArcSchema = new mongoose.Schema({
    title: {
        type: String
    },
    no: {
        type: Number
    }
});


const Arc = mongoose.model('Arc', ArcSchema)

module.exports = Arc