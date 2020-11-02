module.exports = {
    getAdminPage: (req, res) => {
        res.render('admin')
    },
    getAdminMangaPageID: async (req, res) => {
        const dbTome = await Tome.find({})
        const dbGenre = await Genre.find({})
        console.log(req.params.id)
        Manga.findById(req.params.id)
            .populate('tome genre ')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log(data)
                console.log('je suis dans le .getMangaPageID de admin')
                res.render('admin', {
                    manga: data,
                    tome: dbTome,
                    genre: dbGenre
                })
            })
    },
}