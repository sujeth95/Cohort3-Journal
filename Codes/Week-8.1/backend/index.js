const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
// Routing in express, the express Router
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);


app.listen(3000, () => {
    console.log(`Server is running in port 3000.`);
})