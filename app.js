const {argv, Command} = require('./config/yargs');
const {create, list, update, remove} = require('./to-do/to-do');


let command = argv._[0];

switch (command) {
    case Command.Create:
            console.log(create(argv.description));
        break;

    case Command.List:
            list();
        break;

    case Command.Update:
            update(argv.description, argv.completed);
        break;

    case Command.Remove:
            remove(argv.description);
        break;

    default:
    console.error('Unknown command')
        break;
}