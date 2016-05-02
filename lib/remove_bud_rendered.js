/**
 * Write bud out into file.
 * @memberof module:coz-bud-remover/lib
 * @function removeBudRendered
 * @param {Bud} bud - Bud to work with.
 * @param {function} callback - Callback when done.
 */

'use strict'

const async = require('async')
const fs = require('fs')
const filedel = require('filedel')

/** @lends removeBudRendered */
function removeBudRendered (bud, callback) {
  async.concatSeries([].concat(bud), (bud, callback) => {
    var filename = bud.path
    fs.exists(filename, function (exists) {
      if (!exists) {
        callback(null, bud)
        return
      }
      filedel(filename, {
        force: bud.force
      }, function (err) {
        delete bud.at
        delete bud.out
        bud.done = false
        callback(err, bud)
      })
    })
  }, callback)
}

module.exports = removeBudRendered
