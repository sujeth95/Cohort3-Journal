const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "IMinLove";
const app = express();

app.use(express.json());

const users = [];

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(u => u.username === username)) {
        res.json({
            message: "You are already signed up"
        })
        return
    }

    users.push({
        username,
        password
    })

    res.json({
        message: "You signed up"
    })
    console.log(users);
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

    if(!foundUser){
        res.json({
            message: "Credentials incorrect"
        })
        return
    } else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);
        res.header("jwt", token);

        res.json({
            token: token
        })
    } 

});

function auth(req, res, next) {
    // This middleware authenticate everything so that endpoints don't have to authenticate everytime an endpoint is called.
    const token = req.headers.token;
    const decodedData = jwt.sign(token, JWT_SECRET);

    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}

function logger(req, res, next) {
    console.log(`${req.method} request came.`);
    next();
}

app.get("/me",logger, auth, (req, res) => {
    // Checks finding the user and returning the token to its user.
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === req.username) {
            foundUser = users[i]
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`)
    console.log("Power comes by choice, not by desire.")
})