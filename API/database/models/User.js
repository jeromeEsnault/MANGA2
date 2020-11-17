const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    isAdmin: {
        boolean: false
    },
    isVerified: {
        boolean: false
    },
    isModo: {
        boolean: false
    },
    isBan: {
        boolean: false
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'le mot de passe est obligatoire'],
        // unique: true
    },
    nameP: {
        type: String,
        required: [true, 'le nom est obligatoire'],
        
    },
    nameM: {
        type: String,
        required: [true, 'le prénom  est obligatoire'],
        
    },
    typeUser: {
        type: String,
        required: [true, 'le prénom  est obligatoire'],
        
    },
    pseudo: {
        type: String,
        required: [true, 'le pseudo  est obligatoire'],
       // unique: true
    },
    datedenaissance: {
        type: String,
        required: [true, 'la date de naissance est obligatoire'],
       // unique: true
    },
    email: {
        type: String,
        required: [true, 'l email est obligatoire'],
       // unique: true
    },
    imgProfil: {
        type: String,
        default: '/img/imgDefault/profil.jpeg'
    }

});


userSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10, (error, encryted) => {
        user.password = encryted
        next()
    })
})


const User = mongoose.model('user', userSchema)

module.exports = User