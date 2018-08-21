const fs = require('fs');
const colors = require('colors');

const SQUARE = '\u25A1';
const TICK = '\u2713';

let todos = require('../db/data.json');

const saveDB = () => {
    let data = JSON.stringify(todos);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) 
            throw new Error('Error trying to save the todo list', err);
    });
};

const create = description => {

    const todo = {
        description,
        completed: false
    };

    todos.push(todo);
    saveDB();
    return todo;
};

const list = () => {
    todos.forEach(t => {
        if (t.completed)
            console.log(`${colors.green(TICK + ' ' + t.description)}`);
        else
            console.log(SQUARE + ' ' + t.description);
     });
};

const update =  (description, completed) => {
    const todo = todos.find(todo => todo.description  == description);
    
    if(todo) {
        todo.completed = completed;
        saveDB();
        list();
    }
}

const remove = (description) => {
    const initialLength = todos.length;
        todos = todos.filter(todo => todo.description !== description);
        
        if (initialLength > todos.length)
        console.log('Todo has been removed!');
        else
        console.log('Todo not removed!');
        
        saveDB();
       
    }

module.exports = {
    create, list, update, remove
};
