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
    // POST : Action d'envoi du formulaire CreateArticle 
    createMangaForm: (req, res) => {
        // formulaire 1
        console.log('Controller Action Formulaire Create Article')
        console.log(req.body)
        Manga.create({...req.body }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .createArticleForm pour manga')
            res.render('formCreateTome')
        })
    },

    createtomeForm: (req, res) => {
        // formulaire 3
        Tome.create({...req.body }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .createArticleForm pour tomes')
            res.render('formCreateGenre')
        })
    },
    creategenreForm: (req, res) => {
        // formulaire 2
        Genre.create({...req.body }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .createArticleForm pour genre')
            res.render('formCreateGenre')
        })
    },




}