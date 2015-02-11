var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with it works', function(done) {
    request(app).get('/').expect('it works', done);
  });
});