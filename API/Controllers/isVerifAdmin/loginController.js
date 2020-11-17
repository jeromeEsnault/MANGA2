module.exports = {
    getLoginPage: (req, res) => {
        res.render('navbar',{
            
            sess: req.session
        })
    },


}