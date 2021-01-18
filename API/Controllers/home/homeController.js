const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const User = require('../../database/models/User')


module.exports = {

    /*
     * Controller
     *************/
    getHomePage: (req, res) => {
        // console.log('je suis dans le .getHomePage')
        const sess = req.session;
        const CSession = req.cookies.cookiesess;
        const CPtiGato = req.cookies.ptiGato;
        console.log('CSession: ', CSession)
        const dbUser = User.find({}).lean()
        const dbTome = Tome.find({}).lean()
        Manga
            .find({})
            .lean()
            .populate('tome user').limit(-3)
            .exec((err, data) => {
                if (err) console.log(err)

                res.render('home', {
                    CSession: CSession,
                    CPtiGato: CPtiGato,
                    manga: data,
                    user: dbUser,
                    tome: dbTome,
                    sess: sess
                })
            })
    },
}