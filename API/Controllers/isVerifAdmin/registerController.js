module.exports = {
    getRegisterPage: (req, res) => {
        res.render('/',{
            sess: req.session
        })
    },


}