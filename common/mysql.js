#!/usr/bin/env node

var mysql   =require('mysql');
var connection  = mysql.createConnection({
    host        : 'localhost',
    user        : 'node',
    password    : 'nodePass',
    database    : 'beacons',
});

connection.connect(function(err){
    if(err){
        console.log('error while connecting to database');
    }
});

connection.query('describe site_ref;',function(err,rows){
    console.log(rows);
    connection.end(function(err){console.log('error while closing conneciton '+err)});
    });

