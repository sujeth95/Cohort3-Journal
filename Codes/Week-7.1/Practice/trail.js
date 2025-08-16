const express = require("express");
const app = express();

function logRequest(req,res,next) {
    console.log(`Request made on ${req.url}`);
    next();
}
app.get('/special', logRequest, (req,res) => {
    res.send("This is a request")
});

app.get('/sum', (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => {
    console.log("Running in port 3000");
})