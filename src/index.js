const ServerGroup = require('./objects/ServerGroup');

const sg = new ServerGroup('Lobby');

const fs = require('fs');
const str = JSON.stringify(sg, null, 4);
fs.writeFile('sg.json', str, (error) => {
    if (error)
        console.log(error);
});



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