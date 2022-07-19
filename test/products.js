// test/server.js

var expect  = require("chai").expect;
var request = require("request");

describe("Products API", function() {

  describe("Reading products from dummyjson", function() {

    var url = "https://dummyjson.com/products";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns list of 100 products", function(done) {
        request(url, function(error, response, body) {
          let json = JSON.parse(body);
          expect(json.total).to.equal(100);
          done();
        });
      });
  });

});