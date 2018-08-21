const Command = {
    Create: 'create',
    List: 'list',
    Update: 'update',
    Remove: 'remove'
};

const argv = require('yargs')
    .command(Command.Create, 'Creates a new todo providing its description', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'The Todo description'
        }
    })
    .command(Command.Update, 'Updates the todo\'s state providing its description', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'The Todo description'
        },
        completed: {
            alias: 'c',
            desc: 'The Todo status',
            default: true
        }
    })
    .command(Command.Remove, 'Removes a todo providing its description', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'The Todo description'
        }
    })
    .command(Command.List, 'Lists all todo\'s')
    .alias('h', 'help')
    .help('help')
    .argv;



module.exports = {
    argv,
    Command
};