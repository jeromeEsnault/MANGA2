const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')

module.exports = {
    getBookingPage: (req, res) => {
        res.render('booking')
    },
    getMangaPageID: async(req, res) => {
        const dbTome = await Tome.find({})
        console.log(req.params.id)
        Manga.findById(req.params.id)
            .populate('tome genre type')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log(data)
                console.log('je suis dans le .getMangaPageID de booking')
                res.render('booking', {
                    manga: data,
                    tome: dbTome
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