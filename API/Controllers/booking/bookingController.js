const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')

module.exports = {


    getMangaPageID: async(req, res) => {
        const sess = req.session
        console.log(sess)
        const dbmanga1 = await Manga.findOne({});
        const dbmanga = await Manga.find({}).populate('tome user').sort(volume);
        const dbTome1 = await Tome.findOne({});

        //console.log('test:' + dbTometest.$mangaID)
        //console.log("dbtome:" + dbTome)
        //console.log("dbTome1 : " + dbTome1)
        console.log("dbmanga:" + dbmanga)
            // console.log(dbGenre)
        console.log('id params:' + req.params.id)
            //console.log('id params:' + )
        console.log('id params:' + req.params.id)
        Tome.findById({ _id: req.params.id })
            .populate('manga user ')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('data :' + data)
                console.log('je suis dans le .getMangaPageID de booking')
                res.render('booking', {

                    manga1: dbmanga1,
                    tome1: dbTome1,
                    manga: dbmanga,
                    tome: data,
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