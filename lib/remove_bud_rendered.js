/**
 * Write bud out into file.
 * @memberof module:coz-bud-remover/lib
 * @function removeBudRendered
 * @param {Bud} bud - Bud to work with.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    fs = require('fs'),
    filedel = require('filedel');

/** @lends removeBudRendered */
function removeBudRendered(bud, callback) {
    async.concatSeries([].concat(bud), function (bud, callback) {
        var filename = bud.path;
        fs.exists(filename, function (exists) {
            if (!exists) {
                callback(null, bud);
                return;
            }
            filedel(filename, {
                force: bud.force
            }, function (err) {
                delete bud.at;
                delete bud.out;
                bud.done = false;
                callback(err, bud);
            });
        });
    }, callback);
}

module.exports = removeBudRendered;