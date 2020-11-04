const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')
const { isValidObjectId } = require('mongoose')

module.exports = {
    // GET : Page manga list ( Utilisateur )
    getMangaPage: (req, res) => { //ok
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
    getPageFormCreateArticle: (req, res) => { //ok
        res.render('formCreateManga')
    },
    // GET : Page create Article
    getPageFormTome: (req, res) => { //ok
        res.render('formCreateTome')
    },
    // GET : Page create Article
    getPageFormGenre: (req, res) => {//?
        res.render('formCreateGenre')
    },
    // POST : Action d'envoi du formulaire Createmanga
    createMangaForm: async (req, res) => {//ok
        const mangaExist = await Manga.findById(req.body._id)
        // formulaire 
        console.log('Controller Action Formulaire Create Article')

        Manga.create({
            ...req.body,
        }, (err, data) => {

            if (err) console.log(err)

            else {
                console.log(data);
                res.redirect(`/editAdmin/` + data._id)
                console.log('redirection faite');
                console.log(data);

                console.log('envoie des donner fait');
            }
            //  Manga.save((err) => {
            //     if (err) console.log(err);
            // });
        })
    },
    editID: async (req, res) => {
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
    getMangaPageID: async (req, res) => {
      
        const dbmanga = await Manga.find({})
        console.log(req.params.id)
        Manga.findById(req.params.id)
            .populate('tome genre ')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log(data)
                console.log('je suis dans le .getMangaPageID de admin')
                res.render(`/editAdmin/` + data._id, {
                    manga: dbmanga
                   
                })
            })
    },
    createTomeForm: async (req, res) => {

        const manga = await Manga.findById(req.params._id)
        // On définit query comme un objet acceuillant notre req.params.id
        console.log(manga);
        // On définit notre construction de Commentaire
        const tome = new Tome({
            mangaID: manga._id,
            ...req.body,
            // Ici on viens formater le chemin de notre image // qui sera stocker dans notre DB
            image: `./img/bookimg/${req.file.originalname}`, // On stock aussi le nom de l'image 
            name: req.file.originalname
        })
        // Ici on incrémente nos commentaire dans nos model en relation
        manga.tome.push(tome._id)
        // On sauvegarde nous modification
        tome.save((err) => {
            if (err) return handleError(err)
        })
        manga.save((err) => {
            if (err) return handleError(err)
        })
        // Et on redirige sur notre article parent
        res.redirect(`/editAdmin/${manga._id}`)
    },
    // formulaire 3
    /*Tome.create({
        mangaID: manga._id,
        ...req.body,


    }, (err, data) => {
        if (err) console.log(err)
        console.log('je suis dans le .createTomeForm pour tomes')
        console.log(data);

        console.log(req.file);
        res.redirect()


    })
},*/
    createGenreForm: (req, res) => {//ok
        // formulaire 2
        Genre.create({ ...req.body }, (err) => {
            if (err) console.log(err)
            console.log('je suis dans le .createGenreForm pour genre')
            console.log(req.body);
            res.redirect('/admin')
        })
    },




}