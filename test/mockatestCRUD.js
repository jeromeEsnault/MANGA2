const assert = require('assert');
const Tome = require('../API/database/models/Tome');

// On donne un nom à notre test
describe('Mocha // CRUD', () => {
  let tome, dbTome;

  // Cette boucle sert pour créé un Tome a chaque 'it' qu'executera Mocha
  beforeEach((done) => {
    tome = new Tome({
        name:'test origine mocka' ,
        volume: 'test origine mocka',
        description:'test origine mocka' ,
        dessin:'test origine mocka' ,
        illustration:'test origine mocka',
        Scenariste:'test origine mocka' ,
        Traducteur:'test origine mocka' ,
        EditeurVF:'test origine mocka' ,
        EditeurVO: 'test origine mocka',
        prepublication: 'test origine mocka',
        origine: 'test origine mocka',
        image: '/img/imgDefault/imgmanga.jpg'
    });
    tome.save()
      .then(() => done());
  });

  it('CRUD // CREATE 1 // Créé tome donnée "test"', (done) => {
   /*  const tome = new Tome({
        name:'test origine mocka' ,
        description:'test origine mocka' ,
        dessin:'test origine mocka' ,
        illustration:'test origine mocka',
        Scenariste:'test origine mocka' ,
        Traducteur:'test origine mocka' ,
        EditeurVF:'test origine mocka' ,
        EditeurVO: 'test origine mocka',
        prepublication: 'test origine mocka',
        origine: 'test origine mocka',
        image: '/img/imgDefault/imgmanga.jpg'
        
    });*/

    tome.save()
      .then((art) => {
        assert(!tome.isNew);
        done(console.log(art));
      });
  });

  it('CRUD // READ 1 // Tome "test"', (done) => {
    Tome.findOne({
        name:'test origine mocka' ,
        volume: 'test origine mocka',
        description:'test origine mocka' ,
        dessin:'test origine mocka' ,
        illustration:'test origine mocka',
        Scenariste:'test origine mocka' ,
        Traducteur:'test origine mocka' ,
        EditeurVF:'test origine mocka' ,
        EditeurVO: 'test origine mocka',
        prepublication: 'test origine mocka',
        origine: 'test origine mocka',
        image: '/img/imgDefault/imgmanga.jpg'
      })
      .then((tome) => {
        assert(tome.title === "test");
        done(console.log(tome));
      })
      .catch((err) => console.log(err));
  })

  /*it('CRUD // READ 2 // Tome "test" ID', (done) => { //ok
    Tome.findById({
        _id: tome._id
      })
      .then((tomeID) => {
        assert(tomeID = {});
        done(console.log(tomeID));
      });
  })*/

 /* it('READ ALL // dbTome []', (done) => { //ok
    Tome.find({})
      .then((db) => {
        assert(db);
        done(console.log(db));
      })
      .catch((err) => console.log(err));
  })*/

 /* it('UPDATE // Tome "test"', (done) => {  //ok
    Tome.find({})
      .then((db) => {
        assert(db);
        done(console.log(db))
      })
      .catch((err) => console.log(err));
  })*/

  // it('CRUD // DELETE 1 // title "test"', (done) => {
  //   Tome.deleteOne()
  //     .then(() => Tome.findOne({ title: 'test' }))
  //     .then((art) => {
  //       assert(art = []);
  //       done(console.log(art));
  //     })
  //     .catch((err) => {
  //       console.error("Handling promise rejection", err);
  //     });
  // });

  // it('CRUD // DELETE ALL => title "test"', (done) => {
  //   Tome.deleteMany({ title: 'test' })
  //     .then(() => Tome.findOne({ title: 'test' }))
  //     .then((art) => {
  //       assert(art = []);
  //       done(console.log(art));
  //     })
  //     .catch((err) => {
  //       console.error("Handling promise rejection", err);
  //     });
  // });



});