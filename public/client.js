/* ====== CLIENT ====== */

// Set server adress for socket server
const server = 'localhost:4000'; // Adress in which the client can reach the server.

// Create new connection to local server
const prefix = 'http://';
const socket = io.connect(prefix + server); // -= Connect to server =-

// Declare variables
const countDown = 5000 * (Math.random() * 2); // Calculate random countdown to game start
let time = null; // Will be assigned at round start
let clickedTime = null; // Will be assigned upon button press
// Import html tags as javascript objects
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const display = document.getElementById('display');
const init = document.getElementById('init');
let button1 = null; // Button has not been clicked yet
let button2 = null; // Button has not been clicked yet
const suffix = 'ms'; // Measure reaction time in milliseconds
let button1Time;
let button2Time;

// Main function
const main = async () => {
	time = Date.now(); // Save time when game started. 
	//					  This is to calculate how much time the player used to press the button.
	display.textContent = 'GO!'; // Announce that the game has begun.

	// Function to check if both buttons has been pressed before picking winner.
	function testFunc() {
		if (button1 && button2) {
			displayResults(button1Time, button2Time);
		} else {
			console.log('Something stopped this action.');
			return;
		}
	}
	// Function to display the results
	let displayResults = (b1R, b2R) => {
		p1.textContent = b1R.toString() + suffix;
		p2.textContent = b2R.toString() + suffix;

		if (b1R < b2R) {
			p1.style.backgroundColor = 'green';
		} else if (b2R < b1R) {
			p2.style.backgroundColor = 'green';
		} else {
			p1.style.backgroundColor = 'blue';
			p2.style.backgroundColor = 'blue';
		}
	};

	// Run block when buton 1 is pressed
	const p1F = function () {
		console.info('Button 1 was pressed');
		clickedTime = Date.now();
		init.textContent = clickedTime - time;

		button1Time = (Date.now() - time); // Calculate used time.

		p1.style.border = 'thick solid #808080';

		// Needs testing
		if (button1 !== true) {
			button1 = true;
			testFunc();
		} else {
			console.log('This button has already been pressed this round');
		}
	}; // End button 1 function

	// Run when button 2 is pressed
	const p2F = function () {
		console.info('Button 2 pressed');
		clickedTime = (Date.now());

		button2Time = (Date.now() - time);

		p2.style.border = 'thick solid #808080';

		// Needs testing
		if (button2 !== true) {
			button2 = true;
			testFunc();
		} else {
			console.log('This button was already pressed this round');
		}
	};

	// Handle keyboard input, keypress and Arduino control board.

	// Mouseclicks:
	p1.addEventListener('click', p1F);
	p2.addEventListener('click', p2F);

	// Keypress
	window.addEventListener('keydown', (e) => {
		if (e.keyCode === 83) { // If 'S' was pressed
			p1F();
		} else if (e.keyCode === 75) { // If 'K' was pressed
			p2F();
		}
	});

	// Arduino control via socket.io
	socket.on('click', (data) => {
		if (data.button === 'p1') { // If button 1 was pressed
			p1F();
		} else if (data.button === 'p2') { // If button 2 was pressed
			p2F();
		} else {
			console.warn('Button is not recognized!');
		}
	});
}; // End main

// Run main upon window load
// countdown
window.onload = setTimeout(() => {
   main();
}, countDown);
