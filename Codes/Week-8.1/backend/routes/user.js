// const express = require("express");
// const Router = express.Router;

const { Router } = require("express");   // Any two of the above can be used.
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "alald124";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;  //TODO: Adding zod validation
    // NOTE: hash the password so plain text password is not stored in the database(DB).

    // const email = req.body.email; // Can be either written like this.

    try {
        await userModel.create({
            // email,  // Can be written as such as well.
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })

        res.json({
            message: "Signup succeeded"
        })
    } catch (e) {
        res.status(400).json({
            message: "Signup failed",
            error: e.message
        })
    }
})

userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    //NOTE: Ideally password should be hashed, and hence you can't compare the user provided password and the database password.
    const user = await userModel.findOne({  // findOne will either return the user or the undefined.
        email,
        password
    });

    if (user) {
        jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        // Do cookie logic (if you want to use cookies)

        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: "Incorrect Credentials",
        })
    }
})

userRouter.get("/purchases", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}