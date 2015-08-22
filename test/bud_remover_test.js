/**
 * Test case for budRemover.
 * Runs with nodeunit.
 */

var BudRemover = require('../lib/bud_remover.js'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Bud remover'] = function (test) {
    var filename = tmpDir + '/work-file.txt';
    fs.writeFile(filename, 'foo', function (err) {
        test.ifError(err);
        new BudRemover().remove({
            path: filename
        }, function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

