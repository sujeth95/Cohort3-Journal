function createCourseRoutes(app) {

    app.get("/user/purchases", (req, res) => {
        // you would expect the user to pay you money
        res.json({
            message: "signup endpoint"
        })
    })

    app.get("/course/preview", (req, res) => {
        res.json({
            message: "signup endpoint"
        })
    })
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}