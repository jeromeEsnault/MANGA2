const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')

const User = require('../../database/models/User')
const { isValidObjectId } = require('mongoose')

module.exports = {

    getMangaPageID: async(req, res) => { //ok
        const dbTome = await Tome.findOne({}).lean()
        const dbGenre = await Genre.find({}).lean()
        const dbUser = await User.find({}).lean()
            //console.log(req.params.id)
            //console.log(req.params)
        Tome.findById(req.params.id).lean()
            .populate('tome user ')
            .exec((err, data) => {
                if (err) console.log(err)
                    //console.log(data)
                console.log('je suis dans le .getMangaPageID de booking')
                res.render('booking', {
                        manga: data.manga,
                        tome: data.tome,
                        user: dbUser
                    })
                    /* res.json(
                         data,
                         dbTome,
                        
                     )*/
            })
    },


    // GET : Page Create Article ( Utilisateur )
    getPageFormCreateArticle: (req, res) => {
        res.render('formCreateManga')
    },


    // POST : Action d'envoi du formulaire Createmanga
    createMangaForm: async(req, res) => { //ok
        // const mangaExist = await Manga.findById(req.params._id)
        // formulaire 
        console.log('Controller Action Formulaire Create manga')

        Manga.create({
            ...req.body,
            image: `/img/bookimg/${req.file.originalname}`, // On stock aussi le nom de l'image 
            name: req.file.originalname
        }, (err, data) => {

            if (err) console.log(err)

            else {
                console.log(data);
                res.redirect(`/admin`)
                console.log('redirection faite');
                console.log(data);

                console.log('envoie des donner fait');
            }
            //  Manga.save((err) => {
            //     if (err) console.log(err);
            // });
        })
    },
    editID: async(req, res) => {
        console.log('Controller Edit ID')
            // recupérer lid du manga et le mettre en attente 
        const mangaExist = await Manga.findById(req.params.id)
        let tomeArray = mangaExist.tomes
        let userArray = mangaExist.user

        if (req.body.tome && req.body.genre) {
            tomeArray.push(req.body.tome),
                userArray.push(req.body.user)
        }
        // on recupére le tableau de tome
        console.log(tomeArray)
        console.log(userArray);
        console.log(' je suis dans le tomeArray')
            //

        // on recupére le tableau de genre

        //
        Manga.findByIdAndUpdate(req.params.id, {
            tome: tomeArray,
            user: userArray,

        }, (err, data) => {
            if (err) console.log(err)
            console.log(data)
            console.log('je suis dans le .editid')
        })
        res.end()

    },
    getMangaPageID: async(req, res) => {
        console.log('je suis dans le .getMangaPageID de editadmin')
        const dbManga = await Manga.findById(req.params.id).lean()

        console.log(req.params.id)
        Tome.findById(req.params.id).lean()
            .populate('tome user ')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log(data)
                console.log('je suis dans le .getMangaPageID de editadmin')
                res.render('editAdmin', {
                    tome1: data,
                    manga1: dbManga

                })
            })
    },


    createTomeForm: async(req, res) => {
        console.log('je suis dans le .createTomeForm de editadmin')
        const manga = await Manga.findById(req.params.id)
            // On définit manga comme un objet acceuillant notre req.params.id
            //console.log(manga);
        console.log(req.body);
        // On définit notre construction de tome
        const tome = new Tome({
                mangaID: manga._id,
                ...req.body,
                // Ici on viens formater le chemin de notre image // qui sera stocker dans notre DB
                image: `/img/bookimg/${req.file.originalname}`, // On stock aussi le nom de l'image 
                name: req.file.originalname
            })
            // Ici on incrémente nos mangas dans nos model en relation
        manga.tome.push(tome._id)
        console.log(tome._id);
        console.log(manga);
        // On sauvegarde nos modification

        tome.save((err) => {
            if (err) return console.log(err)
            manga.save((err) => {
                if (err) return console.log(err)
                console.log('coucou');
                // Et on redirige sur notre manga parent
                res.redirect(`/editAdmin/${manga._id}`)
            })
        })
    },








}