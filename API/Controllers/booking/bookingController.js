const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')

module.exports = {


    getMangaPageID: async(req, res) => {
        console.log('Page ID')
        const sess = req.session


        Manga.findOne({ _id: req.params.id })
            .lean()
            .populate('manga user tome')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('data :')
                console.log(data)

                res.render('booking', {

                    mangaID: data,
                    tomeID: data.tome,
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