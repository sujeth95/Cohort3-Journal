const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
// bcrypt, zod, jsonwebtoken
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middlware/admin");

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

adminRouter.post("/course",adminMiddleware, async (req,res) => {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours (watch it in youtube)
    const course = await courseModel.create({
        // title, description, imageUrl, price, creatorId: adminId  //(Can also be written as such or convienence)
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })
    
    res.json({
        message: "Course Created",
        courseId: course._id
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