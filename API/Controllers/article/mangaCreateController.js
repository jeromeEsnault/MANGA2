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
    // GET : Page create Article
    getPageFormTome: (req, res) => {
        res.render('formCreateTome')
    },
    // GET : Page create Article
    getPageFormGenre: (req, res) => {
        res.render('formCreateGenre')
    },
    // POST : Action d'envoi du formulaire CreateArticle 
    createMangaForm: async(req, res) => {
        const mangaExist = await Manga.findById(req.params.id)
            // formulaire 1
        console.log('Controller Action Formulaire Create Article')
        Manga.create({...req.body
        }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .createMangaForm pour manga')
            console.log(req.body);
            res.redirect(`/manga/edit/` + mangaExist)


        })
    },




    createTomeForm: (req, res) => {




        // formulaire 3
        Tome.create({
            manga: manga._id,
            _id: req.body._id,
            ...req.body, // Ici on viens formater le chemin de notre image // qui sera stocker dans notre DB
            image: `./img/bookimg/${req.file.originalname}`, // On stock aussi le nom de l'image 
            name: req.file.originalname

        }, (err) => {
            if (err) console.log(err)
            else(!req.tome._id)
            console.log('je suis dans le .createTomeForm pour tomes')
            console.log(req.body);
            manga.save(function(err) {

                if (err) console.log(err);

                const tome = new Tome({
                    ...req.body,
                    manga: manga._id // assign the _id from the person
                });

                tome.save(function(err) {
                    if (err) console.log(err);

                });
            });
            console.log(req.file);
            res.redirect('/genre/create')


        })
    },
    createGenreForm: (req, res) => {
        // formulaire 2
        Genre.create({...req.body }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .createGenreForm pour genre')
            console.log(req.body);
            res.redirect('/admin')
        })
    },




}