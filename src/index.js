const ServerGroup = require('./objects/ServerGroup');

new ServerGroup('Lobby').startServer(10);

// const net = require('net');
// var HOST = '127.0.0.1';
// var PORT = 6969;
// net.createServer((sock) => {
//     console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
//     sock.on('data', (data) => {
//         sock.write(data);
//     });
//     sock.on('close', (data) => {
//         console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
//     });
// }).listen(PORT, HOST);
// console.log('Server listening on ' + HOST + ':' + PORT);