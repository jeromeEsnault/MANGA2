module.exports = {
    getReferencePage: (req, res) => {
        const sess = req.session
        console.log(sess)
        res.render('reference',{
            sess:sess
        })
    }
}