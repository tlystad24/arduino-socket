/* ====== CLIENT ====== */

// Set server adress for socket server
const server = 'localhost:4000'; // Adress in which the client can reach the server.

// Create new connection to local server
const prefix = 'http://';
const socket = io.connect(prefix + server); // -= Connect to server =-


let winner = false;
let countDown = 5000 * (Math.random() * 2);
let time = null; // Will be assigned later
let clickedTime = null; // Will be assigned upon button press
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let display = document.getElementById('display');
let init = document.getElementById('init');
let button1 = null;
let button2 = null;
let suffix = 'ms';

// Clicks recieved from server
socket.on('click', (data) => {
	game.winner = true;
	if (data.button === 'p1') {
		// DO:
	} else if (data.button === 'p2') {
		// DO:
	}
});

// Main function

let main = async () => {
	time = Date.now();
	
}