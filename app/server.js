var express = require('express');
var mysql = require('mysql');
const dotenv = require('dotenv');

var app = express();

var con = mysql.createConnection({
    host: dotenv.DB_USER,
    user: "yourusername",
    password: 
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

var servidor = app.listen(3000, () => {
    console.log('Server running on port ', servidor.address().port);
   });

app.use(express.static('view'));