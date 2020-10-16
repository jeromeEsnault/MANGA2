const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
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
    }

});


UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10, (error, encryted) => {
        user.password = encryted
        next()
    })
})


const User = mongoose.model('user', UserSchema)

module.exports = User