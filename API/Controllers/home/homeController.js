const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const User = require('../../database/models/User')


module.exports = {

    /*
     * Controller
     *************/
    getHomePage: (req, res) => {

        const sess = req.session
        console.log(sess)
        const dbUser = User.find({})
        const dbTome = Tome.find({})
        Manga.find({})
            .populate('tome user').limit(-3)
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('je suis dans le .getHomePage')
                console.log(sess)
                res.render('home', {

                    manga: data,
                    user: dbUser,
                    tome: dbTome,
                    sess: sess
                })
            })
    },
}