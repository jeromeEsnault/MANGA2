module.exports = {
    getBookingPage: (req, res) => {
            res.render('booking')
        }
        /* getMangaPageID: (req, res) => {
             console.log(req.params.id)
             Manga.findById(req.params.id)
                 .populate('Manga', 'type', 'genre')
                 .exec((err, data) => {
                     if (err) console.log(err)
                     console.log(data)
                     console.log('je suis dans le .getMangaPageID de booking')
                     res.render('booking', {
                         manga: data
                     })
                 })
         },*/

}