'use strict'

const cozBudRemover = require('coz-bud-remover')
const assert = require('assert')

const remover = cozBudRemover({})

remover.remove('**/.*.bud', (err, buds) => {
  assert.ifError(err)
  /* ... */
})
