const express = require('express') //NOTE: Express library doesnot return you a variable, it returns you a function.
const app = express();

app.use(express.json()); // This helps to access the request(req) body.

const users = [];

/*[
    {username: "harkirat", password: "ilovekiara"}
] */

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post('/signup', function (req, res) {
    //input validation using zod
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(u => u.username === username)) {
        res.json({
            message: "You are already signed up"
        })
        return
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users);

})

app.post('/signin', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //EASY WAY FOR FINDING THE REGISTER USER
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
    }

    //NOTE: Learn about maps and filter to know more about find function

    //TOUGH WAY FOR FINDING THE REGISTER USER
    // const user = users.find(function (u) {
    //     if (u.username == username && u.password == password) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })

    if (foundUser) {
        const token = generateToken();
        foundUser.token = token;
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
    const token = req.headers.token;
    let foundUser = null;

    for(let i=0;i<users.length; i++){
        if(users[i].token == token){
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
            message: "token invalid"
        })
    }

})

app.listen(3000); //means that the http server is listening in port 3000