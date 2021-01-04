const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')

module.exports = {


    getMangaPageID: async(req, res) => {
        console.log('Page ID')
        const sess = req.session
        // console.log(sess)
        // const dbmanga1 = await Manga.findOne({}).lean();
        // const dbmanga = await Manga.find({}).lean();
        // const dbTome1 = await Tome.findOne({}).lean();
        // const dbTome = await Tome.find({}).lean();
        // const dbTometest = await Tome.find({ _id: req.params.id, }).lean();
        //console.log('test:' + dbTometest.$mangaID)
        //console.log("dbtome:" + dbTome)
        //console.log("dbTome1 : " + dbTome1)
        // console.log("dbmanga:" + dbmanga)
            // console.log(dbGenre)
        // console.log('id params:' + req.params.id)
            //console.log('id params:' + )
        // console.log('id params:' + req.params.id)

        Manga.findById({ _id: req.params.id })
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