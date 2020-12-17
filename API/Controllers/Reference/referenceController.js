const Manga = require("../../database/models/Manga");
const Tome = require("../../database/models/Tome");


module.exports = {
    getReferencePage: async (req, res) => {
        console.log('je suis dans le .getAdminPage')
        const sess = req.session
        //console.log(sess)
        const dbManga = await Manga.find({}),
            dbTome = await Tome.findOne({}).limit(1).sort({$naturel:1}),
            dbmanga1=await Tome.find({});
            //;
           
        //console.log(dbTome1);
        Manga.find({})
            .populate('tome user')
            .exec((err, data, req) => {

                if (err) console.log(err)

                console.log("test1");
                //console.log(dbTome1);// ok fonctionne 
                console.log(dbManga);
                console.log("test2");
                //console.log(dbTome1);// ok fonctionne 
                console.log(dbTome);
                console.log("test3");
                //console.log(dbTome1);// ok fonctionne 
                console.log(dbmanga1);

                //console.log(data)
                console.log('je suis dans le .getAdminPage LA FIN')
                res.render('reference', {
                    layout: 'adminLayout',
                    manga: data,
                    tome: dbTome,
                    sess: sess,
                    manga1: dbmanga1
                    



                })
            })
    }
}

