// Server

// Import libraries
var express = require('express');

// Server app setup
var app = express();
var server = app.listen(80, function {
  console.log('Listening to port 80');
});

// Server static files
app.use(express_static('public'));

// Set up socket.io and pass server
var io = socket('server');
io.on('connection', function(socket) {
  console.log('Connected to a new socket');
});
