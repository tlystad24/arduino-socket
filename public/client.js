/* ====== CLIENT ====== */ 

// Create new connection to local server
var socket = io.connect('http://localhost:4000');

socket.on('ping', (data) => {
	document.write(data.message);
});

// React to clicks: -=TODO=-
socket.on('click', (data) => {
	if (data.click.button === 'p1') {
		// B1 pressed
		console.log('Button 1 recieved!');
	} else if (data.clock.button === 'p2') {
		// B2 pressed
		console.log('Button 2 recieved!');
	}
});