const mysql = require('mysql');

const connectDB = mysql.createConnection({

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database : process.env.DB

});
  
connectDB.connect(function(err) {
    
    if (err) throw err;
    console.log("Database Instance Connected!");

});

module.exports = connectDB;
  