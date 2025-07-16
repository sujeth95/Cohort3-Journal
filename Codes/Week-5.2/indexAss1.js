const express = require("express");
const app = express();

//NOTE: Express is nothing but a chain of middlewares.

let requestCount = 0;

//requestIncreaser is a middleware.
function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1;
        console.log(`Total number of requests = ${requestCount}`);
        // res.json({
        //     message: "I ended the request early"
        // });
    next();
}

function realSumHandler(req, res) {
    console.log("Control reached the real handler")
    //main content
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    // console.log(req.name);

    res.json({
        ans: a + b
    })
};

app.get("/admin", function(){
    
})

app.use(requestIncreaser)
//better routing, add database, middlewares
app.get("/sum", realSumHandler);

app.get("/multiply", realSumHandler);

app.get("/subtract", realSumHandler);

app.listen(4000);