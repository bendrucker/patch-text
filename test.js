'use strict'

var test = require('tape')
var replace = require('./')

test(function (t) {
  var text = 'Hello guys!'
  var updated = replace(text, [
    {
      start: 0,
      end: 5,
      replacement: 'Hi'
    },
    {
      start: 7,
      end: 9,
      replacement: 'al'
    }
  ])
  t.equal(updated, 'Hi gals!')
  t.end()
})
