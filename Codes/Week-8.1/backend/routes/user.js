const express = require("express");
const Router = express.Router;

// const { Router } = require("express");   // Any two of the above can be used.

app.post("/signup", (req,res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.post("/signin", (req,res) => {
    res.json({
        message: "signin endpoint"
    })
})

app.get("/purchases", (req,res) => {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    createUserRoutes: createUserRoutes
}