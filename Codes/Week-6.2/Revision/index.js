const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "SujeetTheGreat";
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

    res.json({
        message: "You are signed up"
    })

    console.log(users)
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // maps and filters
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username: username,
            password: password,
            firstName,
            lastName,
            courses: []
        }, JWT_SECRET);

        // foundUser.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users)
})

app.get("/me", (req, res) => {
    const token = req.headers.token; //jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: "sujeet@gmail.com"}
    const unAuthDecodedinfo = jwt.decode(token,);  // {username: "sujeet@gmail.com"}
    const username = decodedInformation.username;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "Token invalid"
        })
    }
})

app.listen(3000, () => {
    message: "Port 3000 is running"
}); // that the http server is listening on port 3000