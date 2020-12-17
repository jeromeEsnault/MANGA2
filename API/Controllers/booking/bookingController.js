
const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')

module.exports = {


    getMangaPageID: async (req, res) => {
        const sess = req.session
        console.log(sess)
        const dbmanga1 = await Manga.findOne({});
        const dbTome1 = await Tome.findOne({});
        const dbTome = await Tome.find({});
        //console.log(req.body)
        console.log(dbTome)
        console.log(dbTome1)
        console.log(dbmanga1)
       // console.log(dbGenre)
        //console.log(req.params.id)
        Manga.findById(req.params.id)
            .populate('tome genre ')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log(data)
                console.log('je suis dans le .getMangaPageID de booking')
                res.render('booking', {
                    manga: dbmanga1,
                    tome1: dbTome1,
                    tome: dbTome,
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