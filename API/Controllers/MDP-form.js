const User = require('../database/models/User')
const bcrypt = require('bcrypt')
module.exports = {

    emailpassword: async(req, res) => {
        const emailExist = await req.body.mail
        console.log('Controller email  changa mot de passe')

        if (!emailExist) res.redirect('/')
        bcrypt.hash(req.body.password, 10, (err, encrypted) => {
            if (err) console.log(err)
            User.findOneAndUpdate({
                password: encrypted
            }, (err) => {
                if (err) console.log(err)

                console.log(req.body)
                res.redirect('/')
            })
        })
    }
}