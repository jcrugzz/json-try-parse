'use strict';

var tryParse = require('./');
var assume = require('assume');

describe('json-try-parse', function () {

  it('should return a parsed object given valid json', function () {
    var obj = tryParse('{ "hello": "there" }');
    assume(obj).is.an('object');
    assume(obj.hello).equals('there');
  });

  it('should return undefined with invalid json', function () {
    var ret = tryParse('{ "hello: "there" }');

    assume(ret).is.an('undefined');
  });
});
