/* ====== CLIENT ====== */

// Set server adress for socket server
const server = 'localhost:4000'; // Must be set to the adress in which the client can reach the server.

// Create new connection to local server
let socket = io.connect('http://' + server); // -= Connect to server =-

// Game object
let game = {
	// Text notification display
	displayText: document.getElementById('displayText'),
	// Player 1 symbol
	player1: document.getElementById('player1'),
	// Player 2 symbol
	player2: document.getElementById('player2')
};

console.log(game.display, game.player1, game.player2);

/*
socket.on('ping', (data) => {
	console.log(data.message);
});
*/
// React to clicks: -=TODO=-
socket.on('click', (data) => {
	console.log(data);
	if (data.button === 'p1') {
		// B1 pressed
		console.log('Button 1 recieved!');
		game.displayText.textContent = 'Button 1';
		game.player1.style.color = 'green';
		game.player2.style.color = 'red';
	} else if (data.button === 'p2') {
		// B2 pressed
		console.log('Button 2 recieved!');
		game.displayText.textContent = 'Button 2';
		game.player2.style.color = 'green';
		game.player1.style.color = 'red';
	}
});

// Game handler:
function gameHandler() {
	let winner = false;
	let env = 'prod';
	while (!winner && env === 'prod') {


	}
}
