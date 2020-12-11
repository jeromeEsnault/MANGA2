console.log("fichier supertest");
const request = require('supertest');
const app = require('../server');
const Manga = require('../API/database/models/Manga')
const assert = require('assert');


describe('SUPERTEST // "/manga2"', function () {
  it('a file', function (done) {
    request(app)
      .post('/upload/single')
      //.field('image', '{"in":"case you want to send json along with your file"}')
      .attach('image', '/img/bookimg/test.jpg')
      .expect(resetBodyUploadData)
      .expect(200, result, err => (err ? done(err) : fs.stat(uploadedFilePath, done)));
  });
  /*
  it('Get Home (Page home)1', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log("error");
          done(err);
        } else {
          // console.log(res.header);
          console.log(res)
          done();
        }
      })
  });


  it('Get manga // (Page manga)', (done) => {
    request(app)
      .get('/manga')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log("error");
          done(err);
        } else {
          // console.log(res);
          done();
        }
      })
  });

  it('Post manga/create // (create manga)', (done) => {
    request(app)
      .post('/manga/create')
      .send({ titlevf: 'Supertest' })
      .set('Accept', 'application/json')
      // .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
          done(err);
        } else {
          // console.log(res);
          done();
        }
      })
  });
*/
});