const Manga = require('../../database/models/Manga')

module.exports = {
    getBookingPage: (req, res) => {
        res.render('booking')
    },
    getMangaPageID: (req, res) => {
        console.log(req.params.id)
        Manga.findById(req.params.id)
            .populate('tome')
            .populate('type')
            .populate('genre')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log(data)
                console.log('je suis dans le .getMangaPageID de booking')
                res.render('booking', {
                    manga: data
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