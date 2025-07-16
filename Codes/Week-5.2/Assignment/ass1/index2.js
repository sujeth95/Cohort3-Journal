const express = require("express")
const bodyParser = require("body-parser"); //This library as introducted to parse the body.
const app = express();

// in Express, if you want to send JSON data
// you need to first parse the JSON data

app.use(express.json());  //Either-way you can also use app.use(bodyParser.json()); if, body-Parser library is installed.

app.post("/sum", function (req,res){
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b
    })
})

app.listen(5000);