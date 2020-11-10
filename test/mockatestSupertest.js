const request = require('supertest');
const app = require('../server');

const assert = require('assert');

describe('SUPERTEST // "/manga"', function () {

  it('Get Home (Page home)', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log("error");
          done(err);
        } else {
           console.log(res.header);
          // console.log(res)
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

});