const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')
const Type = require('../../database/models/Type')

module.exports = {
    // GET : Page manga list ( Utilisateur )
    getMangaPage: (req, res) => {
        Manga.find({})
            .populate('tome type genre')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('je suis dans le .getMangaPage')
                console.log(data)
                res.render('manga', {
                    manga: data
                })
            })
    },

    // GET : Page Create Article ( Utilisateur )
    getPageFormCreateArticle: (req, res) => {
        res.render('formCreateManga')

    },
    // Create Manga (Model)
    postManga: async(req, res) => {
        // Récuperation de la liste complète de Model
        const dbModel = await Manga.find({})

        // On demande à notre Model de créé un nouvelle Obj Model
        Manga.create({
            // On récupère les variables du formulaire
            // il faut biensur qu'il soit en corélation avec le Model
            titlevo: req.body.titlevo,
            titlevf: req.body.titlevf,
            author: req.body.author
                // ...req.body

        }, (err) => {
            if (err) console.log(err)
                // Une fois que la function create a été éffectuer il 
                // nous redirige
                // et log notre formulaire envoyer
            console.log(req.body)
            res.redirect('/')

        })
    },
    //appeler  le await pour incorporer les donnée avec async
    editID: async(req, res) => {
        console.log('Controller Edit ID')
            // recupérer lid du manga et le mettre en attente 
        const mangaExist = await Manga.findById(req.params.id)
        let tomeArray = mangaExist.tome

        if (req.body.tome) {
            tomeArray.push(req.body.tome)
        }

        console.log(tomeArray)

        Manga.findByIdAndUpdate(req.params.id, {
            tome: tomeArray
        }, (err, data) => {
            if (err) console.log(err)
            console.log(data)
        })

        res.end()

    },
    // Create Tome (Model)
    postTome: async(req, res) => {
        console.log(req.body)

        Tome.create({...req.body }, (err) => {
            if (err) console.log(err)
            res.redirect('/')

        })
    },
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