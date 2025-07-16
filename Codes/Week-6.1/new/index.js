const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomSujeetILove"
const app = express();

app.use(express.json()); // allows you to access the req.

const users = [];  //anytime a request comes over here, we store in this array.

//should return a long string.


app.post("/signup", function (req, res) {
    const username = req.body.username; //Gets the username and password from the user.
    const password = req.body.password;

    users.push({    //Pushing the username and password to get the new entry in users array.
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in"
    })

    console.log(users) //seeing in memory array.
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Learn about Map and filters.
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
            break;
        }
    }

    // const user = users.find(function (u) {
    //     if (u.username == username && u.password == password) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);  //convert their username to JWT
        
        // foundUser.token = token;
        res.json({
            message: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

app.get("/me", function(req,res){
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET); //{username}: "Sujeet@gmail.com"
    const username = decodedInformation.username
    
    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username == username){
            foundUser = users[i]
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else{
        res.json({
            message: "Token Invalid"
        })
    }
})

app.listen(3000); //this means that the http server is listening to port 3000.