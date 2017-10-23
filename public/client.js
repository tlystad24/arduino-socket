/* ====== CLIENT ====== */

// Set server adress for socket server
const server = 'localhost:4000'; // Adress in which the client can reach the server.

// Create new connection to local server
const prefix = 'http://';
const socket = io.connect(prefix + server); // -= Connect to server =-

// Game object
const game = {
	// Text notification display
	displayText: document.getElementById('displayText'),
	// Player 1 symbol
	player1: document.getElementById('player1'),
	// Player 2 symbol
	player2: document.getElementById('player2'),
	// Game start date
	startDate: Date.now(),
	// Set winner to false
	winner: false
};

console.log(game.display, game.player1, game.player2);

// React to clicks
socket.on('click', (data) => {
	game.winner = true;
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

/*
// Input handler
const handler = (data) => {
	// Which button was pressed?
	let playerRequest;
	data.button === 'p1' ? playerRequest = 1 : playerRequest = 2;


};
*/
