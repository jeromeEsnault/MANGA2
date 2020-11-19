const Manga = require('../../database/models/Manga')
const Tome = require('../../database/models/Tome')
const Genre = require('../../database/models/Genre')
const User = require('../../database/models/User')

module.exports = {
    
    getAdminPage: (req, res) => {
        const sess = req.session.User
        console.log(sess)
        Manga.find({})
            .populate('tome genre user')
            .exec((err, data) => {
                if (err) console.log(err)
                console.log('je suis dans le .getAdminPage')
                console.log(data)
                res.render('admin', {
                    layout: 'adminLayout',
                    manga: data,
                })
            })
    },
}