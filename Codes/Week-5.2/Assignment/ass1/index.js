const express = require('express')
const app = express();
// logs the method, timestamp and the url

function loggerMiddleware(req, res, next) {
    console.log("Method is " + req.method);
    console.log("Hostname is " + req.hostname);
    console.log("Route is " + req.url);
    console.log(new Date());
// very long log file
//assignments => log the status code of the response.
    next();
}

app.use(loggerMiddleware);

app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        answer: a + b
    });
});

app.listen(4000);