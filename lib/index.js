/**
 * Bud remover for coz.
 * @module coz-bud-remover
 * @version 3.0.5
 */

'use strict'

const BudRemover = require('./bud_remover')

function budRemover(config){
  return new BudRemover(config)
}

budRemover.budRemover = budRemover

module.exports = budRemover
