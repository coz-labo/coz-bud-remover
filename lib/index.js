/**
 * Bud remover for coz.
 * @module coz-bud-remover
 * @version 2.0.0
 */

'use strict'

const BudRemover = require('./bud_remover')

function budRemover(config){
  return new BudRemover(config)
}

budRemover.budRemover = budRemover

module.exports = budRemover
