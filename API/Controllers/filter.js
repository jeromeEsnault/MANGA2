
const Manga = require("../database/models/Manga");
const Tome = require("../database/models/Tome");



module.exports = {
    filtre: (req, res) => {
        const titlevf = "manga2" // dynamic title
        const query = {
            ["titlevf." + titlevf]: /present/i // computed property name
        }

        Manga.countDocuments(query, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json(data)
            }
        })
    }
}