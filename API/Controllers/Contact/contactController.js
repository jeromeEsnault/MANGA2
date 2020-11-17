module.exports = {
    getContactPage: (req, res) => {
        const sess = req.session
        console.log(sess)
        res.render('contact',{
            sess:sess
        })
    }
}