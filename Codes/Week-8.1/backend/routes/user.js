// const express = require("express");
// const Router = express.Router;

const { Router } = require("express");   // Any two of the above can be used.

const userRouter = Router();

userRouter.post("/signup", (req,res) => {
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post("/signin", (req,res) => {
    res.json({
        message: "signin endpoint"
    })
})

userRouter.get("/purchases", (req,res) => {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}