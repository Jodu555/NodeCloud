const execute = require('child_process').exec;
const options = {
    cwd: './CloudData/spigot-Server',
}

const command = 'java -jar spigot.jar';

class Server {

    constructor(name) {
        this.name = name;
        this.logs = [];
    }

    listenForLog() {
        this.process.stdout.on('data', (data) => {
            data = data.toString().split(/(\r?\n)/g);
            data.forEach((item, index) => {
                var line = data[index].trim();
                if (line !== '\n' && line !== '') {
                    console.log('Console Output: "', data[index].trim(), '"');
                    this.logs.push(data[index].trim());
                }
            });
        });
    }

    sendCommand(command) {
        this.process.stdin.setEncoding("utf8");
        this.process.stdin.write(command + '\n');
    }

    stop() {
        this.process.kill('SIGINT');
    }

    start() {
        this.process = execute(command, options, (err, stdout, stderr) => {
            if (err) {
                console.error('Server:start Error: ', err);
                return;
            }
            if (stderr) {
                console.error('Server:start Error: ', stderr);
                return;
            }
            if (stdout) {
                // console.log('LOG OUTPUT: ', stdout);
            }
        });

        try {
            this.listenForLog();

        } catch (error) {
            console.log('Error catched!');
            console.error(error);
        }
    }


}

module.exports = Server;