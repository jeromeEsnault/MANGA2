/*
 *
 * Middleware Authentification
 ******************************/

const User = require('../database/models/User')

module.exports = {
    // Middleware authentifié
    auth: (req, res, next) => {
        console.log('page auht');
        const sess = req.session;
        const user= req.session._id;
        console.log(sess)
        console.log(user)
        // Connecte l'utilisateur dans la base de donné
        User.findById(user, (err,user) => {
            console.log('middle');
            console.log(err);
            console.log(user);

            if (err||!user) {
                console.log('no 1');
                next()
            }
            else {
                console.log('no 2');
                console.log('isadmin');
                console.log(err);
                console.log(req.session.userId);
                console.log(user.isAdmin);
                console.log('isadmin');

                next()
               
            }

        })
    },
    // Middleware isAdmin
    isAdmin: (req, res, next) => {
       
        // Connecte l'utilisateur dans la base de donné
        User.findById(req.session.userId, (err, user) => {
            console.log('isadmin');
            console.log(err);
            console.log(req.session.userId);
            console.log(user.isAdmin);
            console.log('isadmin');
            if (err || user.isAdmin !== true ) res.redirect('/')
            else next()
        })
    }
}

