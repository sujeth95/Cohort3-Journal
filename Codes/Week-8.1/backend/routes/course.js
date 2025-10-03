const { Router } = require("express");
const courseRouter = Router();

    courseRouter.get("/purchases", (req, res) => {
        // you would expect the user to pay you money
        res.json({
            message: "signup endpoint"
        })
    })

    courseRouter.get("/preview", (req, res) => {
        res.json({
            message: "Course Preview Endpoint"
        })
    })

module.exports = {
    courseRouter: courseRouter
}