const express = require("express");
const jwt = require("jsonwebtoken");
// const axios = require("axios");

// NOTE: The most important case of middleware is authentication.
const JWT_SECRET = "sujeet124";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
    console.log(`${req.method} request came`);
    next();
}

// localhost:3000    Avoid CORS  
app.get("/", (req, res) => {
    res.sendFile(__dirname + "Public/index.html")  //__dirname -> is a global variable which holds you current directory.
})

app.post("/signup", logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    // IDEALLY we should check if a user with this username already exists

    res.json({
        message: "You'r signed in"
    })
})

app.post("/signin", logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i]
        }
    }

    if (!foundUser) {
        res.json({
            message: "Incorrect credentials"
        })
        return
    } else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);
        res.header("jwt", token);  // Remember this: This helps to send token to response header

        res.json({
            token: token
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    const currentUser = decodedData.username;

    if (decodedData.username) {
        req.username = decodedData.username
        next()
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}

app.get("/me", logger, auth, (req, res) => {
    const currentUser = req.username;

    // const token = req.headers.token;
    // const decodedData = jwt.verify(token, JWT_SECRET);
    // const currentUser = decodedData.username;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUser) {
            foundUser = users[i];
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
}

)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port running ${PORT}`);
});

// Aunctihi wirting the frontend 