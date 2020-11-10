// Import de Mongoose
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Config Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Connexion de Mongoose
mongoose.connection
  .once('open', (done) => console.log('mongoose connected!'))
  .on('error', (error) => {
    console.warn('Error : ', error);
  });

// Supprime le contenu de article
beforeEach((done) => {
  mongoose.connection.collections.manga.drop(() => {
    done();
  });
});