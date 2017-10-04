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
const board = new five.Board();
var p1Button, p2Button;


//let testLed = new five.Led(13);

board.on('ready', () => {
	console.log('Board is ready! Waiting for connection')
	// Set up socket.io and pass server
	io.on('connection', (socket) => {
		console.log('Connected to a new socket');
		io.emit('ping', {message: 'Hello from express!'})
	});

	io.on('hello', (data) => {
		console.log('Requested to turn on' + data.led);
	});

	// When player 1 clicks their button
	p1button.on('down', () => {
		io.emit('click', { button: 'p1' });
		console.log('p1 button pressed');
	});

	// When player 2 clicks their button
	p2button.on('down', () => {
		io.emit('click', { button: 'p2' });
		console.log('p2 button pressed');
	});


});



