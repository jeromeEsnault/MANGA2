const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')
const Type = require('../../database/models/Type')

module.exports = {
    // GET : Page manga list ( Utilisateur )
    getMangaPage: (req, res) => {
        Manga.find({})
            .populate('tome')
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
    /* createArticleForm: (req, res) => {
         // formulaire 1
         console.log('Controller Action Formulaire Create Article')
         console.log(req.body)
         Manga.create({...req.body }, (err) => {
                 if (err) console.log(err)
                 console.log('je suis dans le .createArticleForm pour manga')
                 res.render('formCreateManga')

             })
             // formulaire 2
         Genre.create({...req.body }, (err) => {
                 if (err) console.log(err)
                 console.log('je suis dans le .createArticleForm pour genre')
                 res.render('formCreateManga')

             })
             // formulaire 3
         Type.create({...req.body }, (err) => {
                 if (err) console.log(err)
                 console.log('je suis dans le .createArticleForm pour type')
                 res.render('formCreateManga')

             })
             // formulaire 4
         Tome.create({...req.body }, (err) => {
             if (err) console.log(err)
             console.log('je suis dans le .createArticleForm pour tomes')
             res.render('formCreateManga')

         })
     },*/

    // envoie de donne sur html
    // getDBMangaID: (req, res) => {
    //   res.render()
    // }
}