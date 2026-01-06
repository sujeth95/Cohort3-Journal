const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ILoveDakotaJohnson";

app.use(express.json());
const users = [];


// Writing backend.
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
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
    console.log(foundUser)
    if (!foundUser) {
        res.status(403).send({
            message: "Invalid Credentials"
        })
    } else {
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token
        })
    }


})

app.get("/me", (req, res) => {
    const token = req.headers.token;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].token === token) {
            foundUser = users[i]
        }
    }

    if (!foundUser) {
        res.status(401).send({
            message: "Invalid token"
        })
    } else {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }

})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
    console.log("Power comes by choice, not by desiger");
})