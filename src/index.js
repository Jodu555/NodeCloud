const { CommandManager, Command } = require('@jodu555/commandmanager');
const commandManager = CommandManager.createCommandManager(process.stdin, process.stdout);
const ServerGroup = require('./classes/ServerGroup');



commandManager.registerCommand(new Command('logs', 'logs', 'Prints all the logs from the server', () => {
    console.log(sg.servers[0].logs);
}))


const sg = new ServerGroup('Lobby');
sg.startServer();

