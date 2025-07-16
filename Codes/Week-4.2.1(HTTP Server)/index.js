// import express from 'express'
const express = require("express")

const app = express()

//route handlers
// / route
// GET method
app.get('/', (req, res) => {
  // req -> all things related to the request  
  res.send("<b>Sujeet Oraon</b>")
//   res.send("<b>Sujeet Oraon</b>") --> sending client more than once will give the error.
})

app.post('/', (req, res) => {
  res.send('Hello from post endpoint')
})
app.get('/asd', (req, res) => {
  res.send('Hello from the asd endpoint')
})

app.listen(3000)  //which port you want to use