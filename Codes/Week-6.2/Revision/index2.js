const express = require("express");
const jwt = require("jsonwebtoken");
// const axios = require("axios");

const JWT_SECRET = "sujeet124";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
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

app.post("/signin", (req, res) => {
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
            username
        }, JWT_SECRET);
        res.header("jwt", token);  // Remember this: This helps to send token to response header

        res.json({
            token: token
        })
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === decodedData.username) {
                foundUser = users[i];
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port running ${PORT}`);
});