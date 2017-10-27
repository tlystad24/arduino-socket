/* ====== SERVER ====== */

// Import libraries
const express = require('express');
const five = require('johnny-five');
const socket = require('socket.io');

// Server app setup
const app = express();
const server = app.listen(4000, () => {
  console.log('Listening to port 4000');
});

// Server static files
app.use(express.static('public'));

// Connect socket to server
const io = socket(server);

// Listen for requests to root and serve index
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

// Create new johnny five board
const board = new five.Board();

// Wait for board to get ready
board.on('ready', () => {
	console.log('Assigning buttons');
	const p1Button = new five.Button(7); // Assign pin 7 to button
	const p2Button = new five.Button(8); // Assign pin 8 to button
	console.log('Board is ready! Waiting for connection');
	// Set up socket.io and pass server
	io.on('connection', (s) => {
		console.log('Connected to a new socket', /* s */);
		//io.emit('ping', {message: 'Hello from express!'})
	});

	io.on('hello', (data) => {
        const requestedString = 'Requested to turn on ';
		console.log(requestedString + data.led);
	});

	// When player 1 clicks their button
	p1Button.on('down', () => {
		io.emit('click', { button: 'p1' }); // Send click to client
		console.log('p1 button pressed');
	});

	// When player 2 clicks their button
	p2Button.on('down', () => {
		io.emit('click', { button: 'p2' }); // Send click to client
		console.log('p2 button pressed');
	});
});
