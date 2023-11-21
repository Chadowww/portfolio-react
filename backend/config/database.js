let mysql=require('mysql2');
let fs = require('fs');

let conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "CHADO",
    password: "wow",
});

conn.connect(function(err){
    if(err) {
        console.error('Error connecting to MySQL: ', err);
        throw err;
    }
    console.log("Connected!");
});

conn.query("DROP DATABASE IF EXISTS `portfolio`", function (err, result) {
    if (err) throw err;
    console.log("Database deleted");
});

conn.query("CREATE DATABASE IF NOT EXISTS `portfolio`", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});

conn.query("USE `portfolio`", function (err, result) {
    if (err) throw err;
    console.log("Database selected");
});

fs.readFile('./backend/migration/migration.sql', 'utf8', function(err, data) {
    if (err) throw err;

    const sqlQueries = data.split(';').filter(query => query.trim() !== '');

    sqlQueries.forEach(query => {
        conn.query(query, function(err, result) {
            if(err) throw err;
            console.log("Requête SQL exécutée avec succès.");
        });
    });
});
