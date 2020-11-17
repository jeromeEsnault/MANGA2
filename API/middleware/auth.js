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
                if (err||!user.isAdmin) {

                    next()
                }
                else {
                    console.log('no 3');
                    console.log('BONNE CONNECT visiteur');
                    console.log('BONNE CONNECT visiteur'); next()
                }
            }

        })
    },
    // Middleware isAdmin
    sAdmin: (req, res, next) => {
        const sess = req.session
        console.log(sess)
        // Connecte l'utilisateur dans la base de donné
        User.findById(req.session.userId, sess, (err, user) => {
            console.log('isadmin');
            console.log(err);
            console.log(req.session.userId);
            console.log(user.isAdmin);
            console.log('isadmin');
            if (err || !user.isAdmin || sess) res.redirect('/')
            else next()
        })
    }
}

