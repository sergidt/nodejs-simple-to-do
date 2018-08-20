const {argv, Command} = require('./config/yargs');
const {createTodo, list} = require('./to-do/to-do');
const colors = require('colors');

const SQUARE = '\u25A1';
const TICK = '\u2713';

let command = argv._[0];

switch (command) {
    case Command.Create:
        console.log(createTodo(argv.description));
        break;

    case Command.List:
        const todos = list();
        todos.forEach(t => {
            if (t.completed)
                console.log(`${TICK} ${colors.green(t.description)}`);
            else
                console.log(`${SQUARE} ${t.description}`);
         });
        break;

    case Command.Update:
        console.log('Update a todo');
        break;

    default:
    console.error('Unknown command')
        break;
}