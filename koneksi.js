var mysql = require('mysql');

// koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect((erro) => {
    if (err) throw err;
    console.log("mysql koneksi");
});

module.exports = conn;