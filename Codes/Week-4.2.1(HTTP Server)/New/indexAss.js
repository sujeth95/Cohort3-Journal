const express = require('express')
const app = express()

let todos = [];
//2.(HARD WAY TO DO ASSIGNMENT) -> store the data in a file, foundation for databases
//3. add user logic

app.post('/', function (req, res){
    //create a random id for the todo
    //extract the todo title from the body
    todos.push({
        title,
        id
    })
})

app.delete('/', function(req, res){
    //extract the todo id
    // remove the todo from here
})

app.get('/', function(req, res){
    req.json({
        
    })
})

app.listen(3000); //Port which will 