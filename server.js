var express = require('express');

var app = express();

var servidor = app.listen(3000, () => {
    console.log('Server running on port ', servidor.address().port);
   });

app.use(express.static(__dirname));