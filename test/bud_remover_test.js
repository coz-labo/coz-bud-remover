/**
 * Test case for budRemover.
 * Runs with nodeunit.
 */
'use strict'
const BudRemover = require('../lib/bud_remover.js')
const fs = require('fs')
const { writeFileAsync } = require('asfs')
const assert = require('assert')
const mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp'

before(() => {
  mkdirp.sync(tmpDir)
})

it('Bud remover', async () => {
  let filename = tmpDir + '/work-file.txt'
  await writeFileAsync(filename, 'foo')
  const remover = new BudRemover()
  await remover.remove({
    path: filename
  })
})

