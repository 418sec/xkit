var async = require('../async');
var assert = require('assert');

describe('#async', function () {

  it('should resolve promise', function () {
    return async(function *() {
      return yield Promise.resolve(1);
    }).then(function (v) {
      assert.equal(v, 1);
    });
  });

  it('should handle error', function () {
    return async(function *() {
      yield 6;
      yield 2;
      throw 1;
    }).catch(function (v) {
      assert.equal(v, 1); 
      return v;
    }).then(function (v) {
      assert.equal(v, 1); 
    });
  });

});
