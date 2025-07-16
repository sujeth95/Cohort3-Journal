const express = require('express');
const app = express();

//NOTE: /something is known as route.
app.get("/sum/:a/:b", function(req,res){
    const a = parseInt(req.params.a);  //For using sum/?a=1&b=2 use -> req.query.a
    const b = parseInt(req.params.b);

    res.json({
        answer: a + b
    })
})
app.get("/multiply", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a * b
    })
})


app.listen(3000);