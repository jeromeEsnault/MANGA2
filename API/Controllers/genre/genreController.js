module.exports = {
    getGenrePage: (req, res) => {
        const sess = req.session
        console.log(sess)
        res.render('genre', {
            layout: 'adminLayout',
            sess: sess
        })
    },


}