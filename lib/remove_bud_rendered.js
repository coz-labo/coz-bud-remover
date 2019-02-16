/**
 * Write bud out into file.
 * @memberof module:coz-bud-remover/lib
 * @function removeBudRendered
 * @param {Bud} bud - Bud to work with.
 * @returns {Promise}
 */

'use strict'

const filedel = require('filedel')
const { statAsync } = require('asfs')

/** @lends removeBudRendered */
async function removeBudRendered(bud) {
  const results = []
  for (let b of [].concat(bud)) {
    let filename = b.path
    const exists = !!(await statAsync(bud).catch(() => false))
    if (!exists) {
      continue
    }
    await filedel(filename, {
      force: bud.force
    })
    delete bud.at
    delete bud.out
    bud.done = false
    results.push(bud)
  }
  return results
}

module.exports = removeBudRendered
