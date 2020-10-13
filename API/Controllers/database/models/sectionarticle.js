const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({

    nommangavo: String,

});
/* const Article = appel de la dependance de mongoose| 
 *appel du model=>  model('article', ArticleSchema)
 *
 */
const Article = mongoose.model('pageid', ArticleSchema)

module.exports = Article