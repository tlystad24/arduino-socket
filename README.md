# Arduino Two-player reaction time game
> Using Johnny-Five, Express.js and Socket.io

## Installation
> Node.JS and NPM is required.

### 1 - 3: Server
1. Clone or the repository: `git clone https://github.com/tlystad24/arduino-socket.git`
2. Navigate to the directory: `cd arduino-socket`
3. Install the dependencies: `npm install`

### 4 - 5: Arduino
4. Connect the arduino to a computer, then compile and upload `StandardFirmata`.
5. Connect two switches with a 10k pullup to `pin 5 and 6`.

### 6: Server
6. Run the server: `node index.js`
