const ServerGroup = require('./classes/ServerGroup');

const sg = new ServerGroup('Lobby');

const fs = require('fs');
const str = JSON.stringify(sg, null, 4);
fs.writeFile('sg.json', str, (error) => {
    if (error)
        console.log(error);
});
