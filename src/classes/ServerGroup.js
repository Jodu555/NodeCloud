const Server = require('./Server');

class ServerGroup {

    servers = [];

    constructor(name, version) {
        this.name = name;
        this.version = version;
    }


    broadcastCommand(command) {
        this.servers.forEach(server => {
            server.sendCommand(command);
        });
    }

    startServer(count = 1) {
        for (let index = 0; index < count; index++) {
            const serverName = this.name + '-' + (this.servers.length + 1);
            console.log(serverName);
            this.server = new Server(serverName);
            this.servers.push(this.server);
            // this.server.start();
        }
    }

}

module.exports = ServerGroup;