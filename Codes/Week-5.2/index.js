const express = require('express')
const path = require('path')
// const cors = require('cors')

const app = express();

app.use(express.json());
// app.use(cors());

//NOTE: This is used when selective sites can only access the backend of a particular site.
// app.use(cors({
//     domains: ["https://google.com","https://account.google.com"]
// }));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.post('/sum', function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b
    })
})

app.listen(3000);