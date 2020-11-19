const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')
const User = require('../../database/models/User')


module.exports = {

    /*
     * Controller
     *************/
    getHomePage: (req, res) => {
        const sess = req.session
        console.log(sess)
        User.findById(req.session.userId)
        Manga.find({})
            .populate('tome genre')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('je suis dans le .getHomePage')
                console.log(sess)
                res.render('home', {
                    manga: data,
                    sess:sess
                })
            })
    },
}
