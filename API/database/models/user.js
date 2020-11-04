const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    isAdmin: {
        boolean: true
    },
    isVerified: {
        boolean: true
    },
    isModo: {
        boolean: true
    },
    isBan: {
        boolean: true
    },
    bio: {
        type: String,
    },

    password: {
        type: String,
        required: [true, 'le mot de passe est obligatoire'],
    },
    name: {
        type: String,
        required: [true, 'le mot de passe est obligatoire'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'l email est obligatoire'],
        unique: true
    },
    imgProfil: {
        type: String,
        default: '/img/imgDefault/profil.jpeg'
    }

});


/*userSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10, (error, encryted) => {
        user.password = encryted
        next()
    })
})*/


const User = mongoose.model('user', userSchema)

module.exports = User