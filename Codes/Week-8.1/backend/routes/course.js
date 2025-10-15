const { Router } = require("express");
const { userMiddleware } = require("../middlware/user");
const { purchaseModel } = require("../db");
const courseRouter = Router();

    courseRouter.get("/purchases", userMiddleware, async (req, res) => {
        const userId = req.userId;
        const courseId = req.body.courseId;

        // should check that the user has actually paid the price
        await purchaseModel.create({
            userId,
            courseId
        })
        // you would expect the user to pay you money
        res.json({
            message: "You have successfully bought the course"
        })
    })

    courseRouter.get("/preview", async (req, res) => {
        
        const course = await courseModel.find({});

        res.json({
            courses
        })
    })

module.exports = {
    courseRouter: courseRouter
}