
// dependance appeler
const mongoose = require('mongoose')
const Schema = mongoose.Schema



// model de construction pour indexer la base de donnée
manga.index({ titlevf: 'string' });


const Manga = mongoose.model('Manga', MangaSchema)

module.exports = Manga