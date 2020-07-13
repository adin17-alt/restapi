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
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// Menampilkan data MHS berdasarkan id
exports.tampilberdasarkanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mhs WHERE id = ?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

// Menambahkan data
exports.tambahMahasiswa = function(req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mhs (nim,nama,jurusan) VALUES(?,?,?)', [nim, nama, jurusan],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambahkan data", res)
            }
        });
};

// mengubah data berdasarkan id
exports.ubahMahasiswa = function(req, res) {
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mhs set nim=?, nama=?, jurusan=?', [nim, nama, jurusan],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil mengubah data", res)
            }
        });
};