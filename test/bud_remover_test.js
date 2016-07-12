/**
 * Test case for budRemover.
 * Runs with nodeunit.
 */
'use strict'
const BudRemover = require('../lib/bud_remover.js')
const fs = require('fs')
const assert = require('assert')
const mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp'

before(() => {
  mkdirp.sync(tmpDir)
})

it('Bud remover', (done) => {
  let filename = tmpDir + '/work-file.txt';
  fs.writeFile(filename, 'foo', (err) => {
    assert.ifError(err)
    new BudRemover().remove({
      path: filename
    }, function (err) {
      assert.ifError(err)
      done()
    })
  })
})

