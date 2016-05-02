/**
 * Bud file remover.
 * Removed rendered file by bud.
 * @memberof module:coz-bud-remover/lib
 * @inner
 * @constructor BudRemover
 */
'use strict'

const async = require('async')
const cozBud = require('coz-bud')
const removeBudRendered = require('./remove_bud_rendered')

/** @lends BudRemover */
function BudRemover (config) {
  const s = this;
}

BudRemover.prototype = {
  /**
   * Remove files rendered by bud.
   * @param {Bud} bud - Bud to work with.
   * @param {removeCallback} callback - Callback when done.
   */
  remove (bud, callback) {
    const s = this
    bud = [].concat(bud).map(cozBud.create)
    async.waterfall([
      function (callback) {
        process.nextTick(() => {
          callback(null, bud)
        })
      },
      function (bud, callback) {
        removeBudRendered(bud, callback)
      }
    ], callback)
  }
}

module.exports = BudRemover

/**
 * Callback for bud remove.
 * @memberof module:coz/lib/bud
 * @inner
 * @callback removeCallback
 * @param {?Error} err - Write error.
 * @param {Bud} bud - Written bud.
 */
