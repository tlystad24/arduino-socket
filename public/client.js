/* ====== CLIENT ====== */ 

// Create new connection to local server
var socket = io.connect('http://localhost:4000');

socket.on('ping', (data) => {
	document.write(data.message);
});