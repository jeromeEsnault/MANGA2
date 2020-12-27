const { get } = require('request')
const Manga = require('../../database/models/Manga')
const { $where } = require('../../database/models/Tome')
const Tome = require('../../database/models/Tome')
const User = require('../../database/models/User')
const test = require('./filtreDOM')


module.exports = {
    filtermanga: (req, res) => {
        const x = req.body.titlevf,
            dbManga = Manga.find({ titlevf: { $all: x }, nameType: { $all: "" } });
        res.render('admin', {
            layout: 'adminLayout',
            manga: dbManga,
            sess: sess,
            tome1: dbTome1,
            tome: dbTome,



        })
    },


    getAdminPage: async(req, res) => {
        console.log('je suis dans le .getAdminPage')
        const sess = req.session
            //console.log(sess)
        const dbManga = await Manga.find({}),
            dbTome = await Tome.find({ volume: { $all: "" } }),
            dbTome1 = await Tome.find({ volume: 1 }),
            rgvol = { volume: 1 };


        Manga.find({})
            .populate('tome user').sort(rgvol)
            .exec((err, data, req) => {

                if (err) console.log(err)
                    // console.log("test1");
                    // //console.log(sess); // ok fonctionne
                    // console.log("test2");
                    // //console.log(data); // ok fonctionne
                    // console.log("test3");
                    // //console.log(dbTome1);// ok fonctionne 

                // console.log("test4");
                // //console.log(filtre); // ok fonctionne
                // console.log("test5");
                // //console.log(dbTome); // ok fonctionne 


                //console.log(data)
                console.log('je suis dans le .getAdminPage LA FIN')
                res.render('admin', {
                    layout: 'adminLayout',
                    manga: data,
                    sess: sess,
                    tome1: dbTome1,
                    tome: dbTome,



                })
            })
    },
}