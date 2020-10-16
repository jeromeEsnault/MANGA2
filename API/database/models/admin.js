const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const AdminSchema = new mongoose.Schema({

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


/*AdminSchema.pre('save', function(next) {
    const Admin = this

    bcrypt.hash(Admin.password, 10, (error, encryted) => {
        Admin.password = encryted
        next()
    })
})*/


const UserAdmin = mongoose.model('admin', AdminSchema)

module.exports = UserAdmin