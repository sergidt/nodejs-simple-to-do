const fs = require('fs');


/*
require and writeFile are using different file paths because the createTodo function is executed from app.js, 
and retrieveDB is executed here.
*/

// array to save our todos
let todos = [];

const retrieveDB = () => {
    todos = require('../db/data.json') || [];
};

const saveDB = () => {
    let data = JSON.stringify(todos);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) 
            throw new Error('Error trying to save the todo list', err);
    });
};

const createTodo = description => {
    retrieveDB();

    const todo = {
        description,
        completed: false
    };

    todos.push(todo);
    saveDB();
    return todo;
};

const list = () => {
    retrieveDB();
     return todos;
};

module.exports = {
    createTodo, list
};
