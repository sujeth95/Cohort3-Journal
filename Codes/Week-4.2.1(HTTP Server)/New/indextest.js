const express = require('express')
const app = express()
const path = require("path");

//This below single line of code helps to serve a static file which is stored in ./public folder.
app.use(express.static(path.join(__dirname, "./public")));

app.get('/create-todo', function(req, res){

    res.json({
        todos: []
    })
})

app.listen(5000);