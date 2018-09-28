
var express = require('express'),
app = express(),
server;

app.get('/', function (req, res){
    res.send('Este é prncipal página.');
});

exports.listen = function (port) {
    server = app.listen( port, function(){
        console.log('Servidor disponível em porta: ' + port);
    });
};

exports.close = function() {
    server.close(function (){
        console.log('Servidor fechado');
    });
};