const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')



module.exports = {
    // GET : Page manga list ( Utilisateur )
    getMangaPage: async(req, res) => {
        const sess = req.session
        console.log(sess)
        const dbTome = await Tome.find({})

        Manga.find({})
            .populate('tome genre')
            .lean()
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('je suis dans le .getMangaPage')
                console.log(data)
                res.render('manga', {

                    manga: data,
                    tome: dbTome,
                    sess: sess
                })
            })
    },

    // GET : Page Create Article ( Utilisateur )
    getPageFormTomecreate: (req, res) => {
        const sess = req.session
        console.log(sess)
        res.render('editAdmin', {
            layout: 'adminLayout',
            sess: sess
        })

    },

    //
    getMangaPageID: async(req, res) => {
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


    //appeler  le await pour incorporer les donnée avec async
    editID: async(req, res) => {
        console.log('Controller Edit ID')
            // recupérer lid du manga et le mettre en attente 
        const mangaExist = await Manga.findById(req.params.id)
        let tomeArray = mangaExist.tomes
        let genreArray = mangaExist.genre

        if (req.body.tome && req.body.genre) {
            tomeArray.push(req.body.tome),
                genreArray.push(req.body.genre)
        }
        // on recupére le tableau de tome
        console.log(tomeArray)
        console.log(genreArray)
        console.log(' je suis dans le tomeArray')
            //

        // on recupére le tableau de genre

        //
        Manga.findByIdAndUpdate(req.params.id, {
            tome: tomeArray,
            genre: genreArray
        }, (err, data) => {
            if (err) console.log(err)
            console.log(data)
            console.log('je suis dans le .editid')
        })
        res.end()

    },

    // supression des donnée
    deleteOneTome: async(req, res) => {
        console.log('Controller delete tome Single')
        const tomeExistOnManga = await Manga.findOne({ tome: req.params.id })

        Manga.findByIdAndUpdate(tomeExistOnManga._id, {
            $pull: { tome: req.params.id }

        }, (err) => {
            if (err) console.log(err)

            Tome.findByIdAndDelete(req.params.id, (err) => {
                if (err) console.log(err)
                res.redirect('/')

            })
        })

    }
}