/* ====== SERVER ====== */

// Import libraries
var express = require('express');
var five = require('johnny-five');
var socket = require('socket.io');

// Server app setup
var app = express();
var server = app.listen(4000, function() {
  console.log('Listening to port 4000');
});

// Server static files
app.use(express.static('public'));

var io = socket(server);

app.get('/', (req, res) => {
	res.sendFile('index.html');
})
// Create new johnny five board
let board = new five.Board();

board.on('ready', () => {
	console.log('Board is ready! Waiting for connection')
	// Set up socket.io and pass server
	io.on('connection', (socket) => {
	  console.log('Connected to a new socket');
	});	
});



