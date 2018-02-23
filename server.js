var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(3000, function() {
    console.log('Server running on 3000 port');
});
