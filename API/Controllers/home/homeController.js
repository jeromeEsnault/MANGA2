const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')


module.exports = {

    /*
     * Controller
     *************/
    getHomePage: (req, res) => {
        Manga.find({})
            .populate('tome genre')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('je suis dans le .getMangaPage')
                console.log(data)
                res.render('home', {
                    manga: data
                })
            })
    },
}
