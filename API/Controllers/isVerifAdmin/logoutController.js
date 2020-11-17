module.exports = {
    getLogoutPage: (req, res) => {
        res.render('logout',{
            
            sess: req.session
        })
    },


}