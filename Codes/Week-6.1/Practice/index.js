const express = require('express')
const app = express();

app.use(express.json());

app.post('/signup', function (req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find)
    
    res.json({

    })
})

app.post("/signin", function(req,res){

})