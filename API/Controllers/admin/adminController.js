const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')

module.exports = {
    // getAdminPage: (req, res) => {
    //    res.render('admin')
    // },
    getAdminPage: (req, res) => {
        const sess = req.session
        console.log(sess)
        Manga.find({})
            .populate('tome genre')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('je suis dans le .getAdminPage')
                console.log(data)
                res.render('admin', {
                    manga: data,
                    sess:sess
                })
            })
    },
}