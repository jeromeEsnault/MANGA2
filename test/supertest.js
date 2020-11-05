
const request = require('supertest');
const express = require('express');
 
const app = express();
 
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});
 
request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

describe('GET /user', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /user', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/user')
      .auth('username', 'password')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /users', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/users')
      .send({name: 'john'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('GET /users', function() {
  it('responds with json', function() {
    return request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
          assert(response.body.email, 'foo@bar.com')
      })
  });
});
describe('POST /user', function() {
  it('user.name should be an case-insensitive match for "john"', function(done) {
    request(app)
      .post('/user')
      .send('name=john') // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.id = 'some fixed id';
        res.body.name = res.body.name.toLowerCase();
      })
      .expect(200, {
        id: 'some fixed id',
        name: 'john'
      }, done);
  });
});
request(app)
  .post('/')
  .field('name', 'my awesome avatar')
  .attach('avatar', 'test/fixtures/avatar.jpg')
 
request = request('http://localhost:5555');
 
request.get('/').expect(200, function(err){
  console.log(err);
});
 
request.get('/').expect('heya', function(err){
  console.log(err);
});

const request = require('supertest');
const should = require('should');
const express = require('express');
const cookieParser = require('cookie-parser');
 
describe('request.agent(app)', function() {
  app.use(cookieParser());
 
  app.get('/', function(req, res) {
    res.cookie('cookie', 'hey');
    res.send();
  });
 
  app.get('/return', function(req, res) {
    if (req.cookies.cookie) res.send(req.cookies.cookie);
    else res.send(':(')
  });
 
  const agent = request.agent(app);
 
  it('should save cookies', function(done) {
    agent
    .get('/')
    .expect('set-cookie', 'cookie=hey; Path=/', done);
  });
 
  it('should send cookies', function(done) {
    agent
    .get('/return')
    .expect('hey', done);
  });
});

agent(app)
  .get('/api/content')
  .set('Cookie', ['nameOne=valueOne;nameTwo=valueTwo'])
  .send()
  .expect(200)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    expect(res.text).to.be.equal('hey');
    return done();
  });
/*
*   possibilité
*
***********************/
//.expect(status[, fn])

//.expect(status, body[, fn])
//.expect(body[, fn])
//.expect(field, value[, fn])
//.expect(function(res) {})
request(app)
  .get('/')
  .expect(hasPreviousAndNextKeys)
  .end(done);
 
function hasPreviousAndNextKeys(res) {
  if (!('next' in res.body)) throw new Error("missing next key");
  if (!('prev' in res.body)) throw new Error("missing prev key");
}
.end(fn)


