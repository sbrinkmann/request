'use strict'

if (!Function.prototype.bind) {
  // This is because of the fact that phantom.js does not have Function.bind.
  // This is a bug in phantom.js.
  // More info: https://github.com/ariya/phantomjs/issues/10522
  /*eslint no-extend-native:0*/
  Function.prototype.bind = require('function-bind')
}


var assert = require('assert')
  , tape = require('tape')
  , request = require('../../index')

tape('Request browser test', function(t) {
  t.plan(1)
  request({
    uri: 'https://api.github.com',
    withCredentials: false
  }, function (error, response) {
    t.equal(response.statusCode, 200)
    t.end()
  })
})
