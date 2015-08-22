/**
 * Bud file remover.
 * Removed rendered file by bud.
 * @memberof module:coz-bud-remover/lib
 * @inner
 * @constructor BudRemover
 */
"use strict";


var async = require('async'),
    cozBud = require('coz-bud'),
    removeBudRendered = require('./remove_bud_rendered');


/** @lends BudRemover */
function BudRemover(config) {
    var s = this;
}

BudRemover.prototype = {
    /**
     * Remove files rendered by bud.
     * @param {Bud} bud - Bud to work with.
     * @param {removeCallback} callback - Callback when done.
     */
    remove: function (bud, callback) {
        var s = this;
        bud = [].concat(bud).map(cozBud.create);
        async.waterfall([
            function (callback) {
                process.nextTick(function () {
                    callback(null, bud);
                });
            },
            function (bud, callback) {
                removeBudRendered(bud, callback);
            }
        ], callback);
    }
};

module.exports = BudRemover;

/**
 * Callback for bud remove.
 * @memberof module:coz/lib/bud
 * @inner
 * @callback removeCallback
 * @param {?Error} err - Write error.
 * @param {Bud} bud - Written bud.
 */