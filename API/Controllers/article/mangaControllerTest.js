const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')


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
            author: req.body.author,
            nameType: req.body.nameType
                // ...req.body

        }, (err) => {
            if (err) console.log(err)
                // Une fois que la function create a été éffectuer il 
                // nous redirige
                // et log notre formulaire envoyer
            console.log(req.body)
            console.log('je suis dans le .postManga') //ok
            res.redirect('/modal')


        })
    },
    // Create Tome (Model)
    postTome: async(req, res) => {
        console.log(req.body)
            // Condition pour verifier si aucun fichier est envoyer dans le formulaire
        if (!req.file) res.redirect('/')

        else { // creation  des donnée dans le model 
            console.log(req.file)
            Tome.create({
                // On stock toute les infos de notre req.body
                ...req.body,
                // Ici on viens formater le chemin de notre image 
                // qui sera stocker dans notre DB
                image: `/public/img/${req.file.originalname}`,
                // On stock aussi le nom de l'image
                name: req.file.originalname
            }, (err, post) => {
                if (err) console.log(err)
                console.log('je suis dans le .postTome')
                res.render(`{{> modal/genre}}`)

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
            res.redirect('/')

        })
    },
    //appeler  le await pour incorporer les donnée avec async
    editID: async(req, res) => {
        console.log('Controller Edit ID')
            // recupérer lid du manga et le mettre en attente 
        const mangaExist = await Manga.findById(req.params.id)
        let tomeArray = mangaExist.tome
        let genreArray = mangaExist.genre

        if (req.body.tome) {
            tomeArray.push(req.body.tome)
        }
        // on recupére le tableau de tome
        console.log(tomeArray)
        console.log(' je suis dans le tomeArray')
            //
        if (req.body.genre) {
            genreArray.push(req.body.genre)
        }
        // on recupére le tableau de genre
        console.log(genreArray)
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