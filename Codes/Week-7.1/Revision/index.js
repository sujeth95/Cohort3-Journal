const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdf@123";

await mongoose.connect("mongodb+srv://sujeet337:8CvsLEwDlSphN2C1@cluster0.sjari5s.mongodb.net/todo-sujeet-2");
const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    UserModel.insert({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are logged in"
    })
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({
        email: email,
        password: password
    })

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id
        });
        res.json({
            token: token
        }, JWT_SECRET);
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});

app.post("/todo",auth, (req, res) => {

});

app.get("/todos", (req, res) => {
    // req.userId

});

function auth(req,res,next){
    const token = req.header.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.userId;
        next();
    }
}

app.listen(3000);