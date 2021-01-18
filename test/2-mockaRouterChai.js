console.log("fichier routerchai");

const mongoose = require('mongoose');
const Manga = require('../API/database/models/Manga')
const assert = require('assert')
    // Config Chai
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const expect = chai.expect;
const app = require('../server');
const Tome = require('../API/database/models/Tome');

chai.use(chaiHttp)

describe('CHAI // CONTROLLER //  homeController', () => {



    it(' ChaiRouter // Get homeController', (done) => {
        chai.request(app)
            .get('/')
            .set('Accept', 'application/json')
            // .expect(200)
            .end((err, res) => {
                // console.log(res)
                if (err) return done(err)
                res.should.have.status(200);
                res.should.be.a('object');
                done();
            });
    });


});



//  describe('CHAI // CONTROLLER //  MangaCreateAdminController', () => {

//     beforeEach((done) => {
//         Manga.deleteOne({}, (err) => {
//             done();
//         });
//     });
//     beforeEach((done) => {
//         Tome.deleteOne({}, (err) => {
//             done();
//         });
//     });


//     it(' ChaiRouter // Get MangaCreateAdminController', (done) => {
//         chai.request(app)
//             .get('/manga/create')
//             .set('Accept', 'application/json')
//             // .expect(200)
//             .end((err, res) => {
//                 // console.log(res)
//                 if (err) return done(err)
//                 res.should.have.status(200);
//                 res.should.be.a('object');
//                 done();
//             });
//     });

//     it(' ChaiRouter // Post manga MangaCreateAdminController', (done) => {
//         let manga = {
//             titlevf: 'test Chai Post',

//         }
//         chai.request(app)
//             .post('/manga/create')
//             .send(manga)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a('object');
//                 done();
//             });
//     });


//     it(' ChaiRouter // Post tome MangaCreateAdminController', (done) => {
//         let tome = {
//             //image: "./img/bookimg/TESTMOCHA.jpg",
//             //volume: 100000000000000,
//             dessin: "test mocha ",
//             prepublication: "test mocha",
//             origine: "test mocha",
//             description: "test mocha",
//             //name: "TESTMOCHA.jpg",
//         }
//         chai.request(app)
//             .post('/modal/:id')
//             .send(tome)
//             .end((err, res) => {
//                 console.log(should);
//                 res.should.have.status(200);
//                 res.should.be.a('object');
//                 done();
//             });
//     });


//     it(' ChaiRouter // Put MangaCreateAdminController', (done) => {
//         let manga = new Manga({
//                 titlevf: 'test Chai Edit'
//             }),
//             mangaEdit = { title: 'test Chai Edit 2' }
//         chai.request(app)
//             .post('/editAdmin/' + manga.id)
//             .send(mangaEdit)
//             .end((err, res) => {
//                 res.should.be.a('object');
//                 done();
//             });
//     });

//     it(' ChaiRouter // Delete MangaCreateAdminController', (done) => {
//         let manga = new Manga({
//             title: 'test Chai Delete'
//         })
//         chai.request(app)
//             .delete('/manga/' + manga.id)
//             .end((err, res) => {
//                 res.should.be.a('object');
//                 done();
//             });
//     });

// });



