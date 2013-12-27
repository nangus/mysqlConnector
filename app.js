var express = require('express');
var mysql = require('mysql');
var app = express();

app.use(express.json({strict: false}));

app.post('/', function(req, res){
        console.log(req.body);
        res.send('ok');
});
app.get('/',function(req,res){
    res.send('hey');
});
app.listen(5212);
