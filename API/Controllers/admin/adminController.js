const { get } = require('request')
const Manga = require('../../database/models/Manga')
const { $where } = require('../../database/models/Tome')
const Tome = require('../../database/models/Tome')
const User = require('../../database/models/User')



module.exports = {


    getAdminPage: async(req, res) => {
        console.log('je suis dans le .getAdminPage')
        const sess = req.session
            //console.log(sess)
        const dbManga = await Manga.find({}).lean(),
            dbUser = await User.find({}).lean(),
            dbTome = await Tome.find({ volume: { $all: "" } }).lean(),
            rgvol = { volume: 1 };


        Manga.find({}).lean()
            .populate('tome user')
            .exec((err, data, req) => {

                if (err) console.log(err)
                console.log(dbTome)
                console.log('je suis dans le .getAdminPage LA FIN')
                res.render('admin', {
                    layout: 'adminLayout',
                    manga: data,
                    sess: sess,
                    tome: dbTome,
                    user: dbUser


                })
            })
    },
}