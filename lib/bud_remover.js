/**
 * Bud file remover.
 * Removed rendered file by bud.
 * @memberof module:coz-bud-remover/lib
 * @inner
 * @class BudRemover
 */
'use strict'

const cozBud = require('coz-bud')
const removeBudRendered = require('./remove_bud_rendered')

/** @lends BudRemover */
class BudRemover {
  /**
   * Remove files rendered by bud.
   * @param {Bud} bud - Bud to work with.
   * @returns {Promise}
   */
  async remove(bud) {
    bud = [].concat(bud).map(cozBud.create)
    return removeBudRendered(bud)
  }
}

module.exports = BudRemover

