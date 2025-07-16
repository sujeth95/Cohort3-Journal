
// import express from 'express'
const express = require('express')
const app = express()  // Creating a fresh app variable on it.

//route handlers
// /route
// GET method
app.get('/', function(req, res) {
    // req -> will give all things related to request
    // res -> want to send something back
  res.send("<b>Sujeet Oraon</b>")
  res.send("<b>Sujeet Oraon</b>")
})

app.post("/", function (req, res){
    res.send("Hello World from the post endpoint");
})

//2nd route handler
app.get('/asd', function(req, res){
    res.send("Hello From the asd endpoint")
})

app.listen(3000)  //which port do you want to listen.