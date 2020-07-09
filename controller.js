'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi berjalan", res)
};

// Emnamoilkan semua data MHS
exports.tampilsemuamahasiswa = function(req, res) {
    connection.query('SELECT * FROM mhs', function(error, rows, fileds) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};