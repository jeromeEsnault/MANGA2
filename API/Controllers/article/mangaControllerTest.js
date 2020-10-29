const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')


module.exports = {
    // GET : Page manga list ( Utilisateur )
    getMangaPage: (req, res) => {
        Manga.find({})
            .populate('tome genre')
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

    // Create Tome (Model)
    postTome: async(req, res) => {
        console.log(req.body)
        console.log('je suis bien dans le postTome');
        // Condition pour verifier si aucun fichier est envoyer dans le formulaire
        if (!req.file) res.redirect('/')

        else { // creation  des donnée dans le model 
            console.log(req.file)
            Tome.create({
                // On stock toute les infos de notre req.body
                ...req.body,
                // Ici on viens formater le chemin de notre image 
                // qui sera stocker dans notre DB
                image: `./img/bookimg/${req.file.originalname}`,
                // On stock aussi le nom de l'image
                name: req.file.originalname
            }, (err, post) => {
                if (err) console.log(err)
                console.log(req.file.originalname)
                console.log('je suis dans le .postTome')
                res.redirect(`/genre`)

            })
        }
    },
    // Create Genre (Model)
    postGenre: async(req, res) => {
        // verifie les valeur envoyer
        console.log(req.body)
            // creation  des donnée dans le model
        Genre.create({...req.body }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .postGenre')
            res.redirect('/manga')

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