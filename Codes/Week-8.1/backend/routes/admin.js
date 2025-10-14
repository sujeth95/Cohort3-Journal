const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
// bcrypt, zod, jsonwebtoken
const JWT_ADMIN_PASSWORD = "112Adjf";

adminRouter.post("/signup", async (req,res) => {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message: "Signup Succeeded."
    })
})

adminRouter.post("/signin", async (req,res) => {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email,
        password
    });

    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
}
})

adminRouter.post("/course", (req,res) => {
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.put("/course", (req,res) => {
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.get("/course/bulk", (req,res) => {
    res.json({
        message: "Signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}