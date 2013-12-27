var express = require('express');
var app     = express();

app.get('/hello.txt',function(req,res){
    var body = 'hey';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
});


