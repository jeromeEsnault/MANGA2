const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MessageSchema = new mongoose.Schema({

    mangaID: [{
        type: Schema.Types.ObjectId,
        ref: 'manga'
    }],
    tome: [{
        type: Schema.Types.ObjectId,
        ref: 'tome'
    }],
    userID: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    
    email: {
        type: String
    },
    dest: {
        type: String
    },
   // isSupport: {
    //    boolean: true
   // },
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


const Message = mongoose.model('Message', MessageSchema)

module.exports = Message