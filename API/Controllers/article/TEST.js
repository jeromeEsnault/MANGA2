const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')


module.exports = {

    post: async(req, res) => {
        // On définit query comme un objet acceuillant notre req.params.id
        const query = { _id: req.params.id }

        // On définit nos Objet en relation avec notre commentaire
        // Attention a bien utilisé un nom d'autheur définit dans la db pendant la creation des articles
        const manga = await Manga.findOne({ mangaid: req.body.titlevo }) //ok
        const tome = await Tome.findById(query)
        const genre = await Genre.findById(query)

        if (!manga) { //ok
            // On définit notre construction de manga
            const manga = new Manga({
                titlevo: req.body.titlevo,
                titlevf: req.body.titlevf,
                author: req.body.author,
                nameType: req.body.nameType,
                tome: tome._id,
                genre: genre._id
            })

            // Ici on incrémente nos manga dans nos model en relation
            manga.tome.push(tome._id)
            manga.genre.push(genre._id)

            // On sauvegarde nous modification
            manga.save((err) => { if (err) return handleError(err) })
            tome.save((err) => { if (err) return handleError(err) })
            genre.save((err) => { if (err) return handleError(err) })

            // Et on redirige sur page home
            res.redirect(`/`)
        } else {
            console.log("Votre autheur n'est pas reconnu dans la db !")
            res.send("")
        }
    },

}