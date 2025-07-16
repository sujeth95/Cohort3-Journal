const express = require('express')
const bodyParser = require('body-parser')
const app = express();

//creating my HTTP server using express.

app.use(bodyParser.json());

app.post('/sum', function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b
    })
})

app.listen(3000)