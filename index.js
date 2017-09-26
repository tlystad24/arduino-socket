// Server

// Import libraries
var express = require('express');
var five = require('johnny-five');
var socket = require('socket.io');

// Server app setup
var app = express();
var server = app.listen(80, function() {
  console.log('Listening to port 80');
});

// Server static files
app.use(express.static('public'));


// Create new johnny five board
let board = new five.Board();

// Set up socket.io and pass server
var io = socket('server');
io.on('connection', function(socket) {
  console.log('Connected to a new socket');
});