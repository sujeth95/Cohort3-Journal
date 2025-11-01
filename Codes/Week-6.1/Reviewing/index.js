const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Sujeet123";
const app = express();

app.use(express.json());  // helps to parse any POST request from res.body
const users = [];  // creating an in memory variable.


app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(u => u.username === username)) {
        res.json({
            message: "You are already signedup"
        })
        return
    }

    users.push({
        username,
        password
    })

    res.json({
        message: "You are signed up"
    })
    console.log(users);
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
    }

    // ALSO A WAY TO AUTHENTICATE A USER
    // const user = users.findOne(function (u) {
    //     if (u.username == username && u.password == password) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })

    if (foundUser) {
        const token = jwt.sign({     // convert their username over to a jwt
            username: username
        }, JWT_SECRET);   // Never use a password in JWT

        // foundUser.token = token;

        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

app.get("/me", (req, res) => {
    const token = req.headers.token;  // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: sujeet@gmail.com}
    const username = decodedInformation.username;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].token == token) {
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

app.get("/courses",async (req, res) => {
    //decode the user
    // const user = await db.query("SELECT * FROM users where token = " + req.headers.token)
    const userid = jwt.verify(req.headers.token);

    //get their purchase
    await db.query("SELECT * FROM courses where userId = " + user);
})

const PORT = 3000;
app.listen(PORT, () => {    // that the port is listening in 3000.
    console.log(`Running on port ${PORT}.`);
})