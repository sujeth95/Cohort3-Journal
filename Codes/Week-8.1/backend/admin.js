const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (req,res) => {
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/signin", (req,res) => {
    res.json({
        message: "Signin endpoint"
    })
})

adminRouter.post("/course", (req,res) => {
    res.json({
        message: "Signup endpoint"
    })
})