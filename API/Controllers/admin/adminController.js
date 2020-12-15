const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const User = require('../../database/models/User')

module.exports = {

    getAdminPage: async (req, res) => {
        console.log('je suis dans le .getAdminPage')
        const sess = req.session
        //console.log(sess)
        const dbManga = await Manga.find({}),
            dbTome = await Tome.find({}),
            dbTome1 = await Tome.find({ volume: 1 });
        const rgvol = { volume: 1 };
        //console.log(dbTome1);
        Manga.find({})
            .populate('tome user').sort(rgvol)



            .exec((err, data, req) => {

                if (err) console.log(err)
                console.log("test1");
                //console.log(sess); // ok fonctionne
                console.log("test2");
                //console.log(data); // ok fonctionne
                console.log("test3");
                //console.log(dbTome1);// ok fonctionne 
                //console.log(dbTome1);
                console.log("test4");
                //console.log(filtre); // ok fonctionne
                console.log("test5");
                //console.log(dbTome); // ok fonctionne 


                //console.log(data)
                console.log('je suis dans le .getAdminPage LA FIN')
                res.render('admin', {
                    layout: 'adminLayout',
                    manga: data,
                    sess: sess,
                    //tome1: dbTome1,
                    tome: dbTome,



                })
            })
    },
}