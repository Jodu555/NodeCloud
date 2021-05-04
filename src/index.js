// const execute = require('child_process').exec;
// const os = require('os');
// const Server = require("./Server.js");

// const server = new Server('Lobby');
// server.start();



// let i = 0;
// setInterval(() => {
//     // 'say Hello: ' + i ' \n'
//     server.sendCommand(`say Hello: ${i}`);
//     i++;
// }, 5000);

const net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
net.createServer((sock) => {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort); 
    sock.on('data', (data) => {
        sock.write(data);
    });
    sock.on('close', (data) => {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
}).listen(PORT, HOST); console.log('Server listening on ' + HOST + ':' + PORT);

