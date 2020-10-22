const Manga = require('../../database/models/Manga')

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
    // POST : Action d'envoi du formulaire CreateArticle 
    createArticleForm: (req, res) => {
        // formulaire
        console.log('Controller Action Formulaire Create Article')
        console.log(req.body)
        Manga.create({...req.body }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .createArticleForm')
            res.render('formCreateManga')

        })
    },

    // envoie de donne sur html
    // getDBMangaID: (req, res) => {
    //   res.render()
    // }
}