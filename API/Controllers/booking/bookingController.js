const Genre = require('../../database/models/Genre')
const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')

module.exports = {
    getBookingPage: (req, res) => {
        const sess = req.session
        console.log(sess)
        const dbTome = Tome.find({})
        const dbGenre = Genre.find({})
        
        res.render('booking', {
            manga: data,
            genre: dbGenre.data,
            tome: dbTome.data,
            sess: sess
        })
    },
    getMangaPageID: async (req, res) => {
        const sess = req.session
        console.log(sess)
        const dbTome = await Tome.find({})
        const dbGenre = await Genre.find({})
        console.log(req.params.id)
        Manga.findById(req.params.id)
            .populate('tome genre ')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log(data)
                console.log('je suis dans le .getMangaPageID de booking')
                res.render('booking', {
                    manga: data,
                    tome: dbTome,
                    genre: dbGenre,
                    sess: sess
                })
            })
    },
    deleteOne: (req, res) => {
        Manga.findByIdAndDelete(req.params.id, (err) => {
            if (err) console.log(err)
            res.redirect('/')
        })

    }

}