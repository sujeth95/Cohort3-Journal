const express = require("express");
const app = express()

app.get('/songs/Liked-Songs', function (req, res){
    res.json({
        data: " "
    });
})

app.listen(3003);