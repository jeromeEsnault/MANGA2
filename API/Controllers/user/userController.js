module.exports = {
    getUserPage: (req, res) => {
        const sess = req.session
        console.log(sess)
        res.render('user', {
            layout: 'adminLayout',
            sess: sess
        })
    }
}