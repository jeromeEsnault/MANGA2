const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const User = require('../../database/models/User')


module.exports = {

    /*
     * Controller
     *************/
    getHomePage: (req, res) => {
        // console.log('je suis dans le .getHomePage')
        const sess = req.session
        // console.log(sess)
        const dbUser = User.find({})
        const dbTome = Tome.find({})

        Manga
            .find({})
            .lean()
            .populate('tome user').limit(-3)
            .exec((err, data) => {
                if (err) console.log(err)

                res.render('home', {

                    manga: data,
                    user: dbUser,
                    tome: dbTome,
                    sess: sess
                })
            })
    },
}