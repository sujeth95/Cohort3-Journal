const express = require('express');
const app = express();

// route handlers
app.get('/', function(req,res){
    // all things related to the request
    res.send("Hello World");
})

app.post('/', function(req,res){
    res.send('Hello World from the post endpoint');
})

app.get('/asd', function(req,res){
    res.send("Hello from the asd endpoint");
})

app.listen(3000); //which port