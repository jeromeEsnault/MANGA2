const mongoose = require('mongoose')
const Schema = mongoose.Schema


const messageSchema = new mongoose.Schema({

    author: {
        type: String
    },
    email: {
        type: String
    },
    dest: {
        type: String
    },
    isSupport: {
        boolean: true
    },
    Message: {
        type: String
    },
    dateCreate: {
        type: Date
    },
    Subject: {
        type: String
    }

});


const Message = mongoose.model('message', messageSchema)

module.exports = Message