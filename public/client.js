/* ====== CLIENT ====== */

// Set server adress for socket server
const server = 'localhost:4000'; // Adress in which the client can reach the server.

// Create new connection to local server
const prefix = 'http://';
const socket = io.connect(prefix + server); // -= Connect to server =-


// let winner = false;
const countDown = 5000 * (Math.random() * 2);
let time = null; // Will be assigned later
let clickedTime = null; // Will be assigned upon button press
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const display = document.getElementById('display');
const init = document.getElementById('init');
let button1 = null;
let button2 = null;
const suffix = 'ms';
let button1Time;
let button2Time;

// Main function
const main = async () => {
	time = Date.now();	

	function testFunc() {
		if (button1 && button2) {
			displayResults(button1Time, button2Time);
			button1 = button2 = false;
			return;
		} else {
			console.log('Something stopped this action.');
			return; // (?)
		}
	}
	let displayResults = (b1R, b2R) => {
		p1.textContent = b1R.toString() + suffix;
		p2.textContent = b2R.toString() + suffix;
	};

	// Run block when buton 1 is pressed
	const p1F = function () {
		console.info('Button 1 was pressed');
		clickedTime = Date.now();
		init.textContent = clickedTime - time;
		// QA
		button1 = true;
		button1Time = (Date.now() - time);

		testFunc();
	}; // End button 1 function

	// Run when button 2 is pressed
	const p2F = function () {
		console.info('Button 2 pressed');
		clickedTime = (Date.now());
		// QA:
		button2 = true;
		button2Time = (Date.now() - time);
		testFunc();
	};

	// Handle keyboard input, keypress and Arduino control board.

	// Mouseclicks:
	p1.addEventListener('click', p1F);
	p2.addEventListener('click', p2F);

	// Keypress
	window.addEventListener('keydown', (e) => {
		if (e.keyCode === 83) {
			console.warn('Key: S was pressed');
		} else if (e.keyCode === 75) {
			console.warn('Key: K was pressed');
		}
	});

	// Arduino control via socket.io
	socket.on('click', (data) => {
		if (data.button === 'p1') {
			p1F();
		} else if (data.button === 'p2') {
			p2F();
		} else {
			console.warn('Button is not recognized!');
		}
	});
}; // End main

// Run main upon window load
window.onload = main();
