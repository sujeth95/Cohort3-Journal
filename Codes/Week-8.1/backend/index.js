const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
// Routing in express, the express Router
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    // dotenv folder.
await mongoose.connect("mongodb+srv://sujeet337:8CvsLEwDlSphN2C1@cluster0.sjari5s.mongodb.net/coursera-app");
app.listen(3000, () => {
    console.log("Running in port 3000.");
})
}

main();