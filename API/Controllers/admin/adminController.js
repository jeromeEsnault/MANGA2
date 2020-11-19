const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')
const User = require('../../database/models/User')

module.exports = {

    getAdminPage: async (req, res) => {
        const sess = req.session
        //console.log(sess)

        const dbTome1 = Tome.findOne({ tome: 1  })
        const dbTome = await Tome.find({})
        const dbGenre = await Genre.find({})
        console.log(dbTome1);
        Manga.find({})
            .populate('tome user')
            .exec((err, data,req) => {
                if (err) console.log(err)
                console.log('je suis dans le .getAdminPage')
                //console.log(data)

                res.render('admin', {
                    layout: 'adminLayout',
                    manga: data,
                    sess: sess,
                    tome1: dbTome1
                   

                })
            })
    },
}