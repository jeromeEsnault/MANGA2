const mongoose = require('mongoose')
const Schema = mongoose.Schema


const messageSchema = new mongoose.Schema({

    author: {
        type: String
    },
    : {
        type: String
    }: {
        type: String
    }: {
        type: String
    }: {
        type: String
    }: {
        type: String
    }: {
        type: String
    }

});


const Message = mongoose.model('type', messageSchema)

module.exports = Message