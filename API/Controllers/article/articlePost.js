const Post = require('../database/models/sectionarticle')


module.exports = (req, res) => {
    Post.create({
        ...req.body

    }, (Error, post) => {
        res.redirect('/')
    })
    console.log(nommangavo);
}