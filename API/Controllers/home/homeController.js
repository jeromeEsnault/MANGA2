
module.exports = {

    /*
     * Controller
     *************/
    getHomePage: async (req, res) => {
        
        // Renvoie de la view article et c'est data
        res.render('home')
    },
}

