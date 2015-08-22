/**
 * Test for index.js
 */

"use strict";

var index = require('../lib/index.js');

exports['Eval index.'] = function (test) {
    var remover = index({});
    test.ok(remover);
    test.done();
};
