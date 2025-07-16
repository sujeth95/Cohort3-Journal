// // Creating an http server
// // express
// // node default library => no

// // Taking the example of a doctor and a clinic and then understanding the concept
// const express = require("express");

// const app = express();  // Creating the clinic

// function sum(n) {
//     let ans = 0;
//     for(let i = 1; i<=n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get("/", function(req, res) {  // The callback called anytime when a person comes in the browser.
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hii Your Answer is " + ans);
// })

// app.listen(3000);  // Doctor taking the room.
// // The doctor have opened the clinic but hadn't implememted the functionality.


//=======================================================================================================================

// const express = require("express");

// const app = express();

// // req, res => request and response.
// app.get("/", function(req, res) {
//     // console.log(1/0);
//     throw new Error("fsadjkai");
// })

// app.listen(3000);

//==============================================================================================================

const express = require("express");
const app = express();

var users = [{
    name: "John",
    kidenys: [{
        healthy: false
    }]
}];

app.use(express.json());

//Query Parameters
app.get("/", function(req, res) {
    // Writing Logic
    const johnKidneys = users[0].kidenys;
    // console.log(johnKidneys)
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidenys = 0;
    //filter
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidenys = numberOfHealthyKidenys + 1;
        }
    }
    const numberofUnheatlhyKidenys = numberOfKidneys - numberOfHealthyKidenys;
    res.json ({
        numberOfKidneys,
        numberOfHealthyKidenys,
        numberofUnheatlhyKidenys
    })
})

app.post("/", function(req, res) {
    console.log(req.body); // undefined
    const isHealthy = req.body.isHealthy;
    users[0].kidenys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.delete("/", function(req, res){
    // for(let i = 0; i<users[0].kidenys.length; i++){
    //     users[0].kidenys[i].healthy = true;
    // }
    // res.json({});

    //filter
    //---------------------------
    
    // You should return a 411
    // Only if atleast one unheatly kideny is there do this, else return 411 
    let alteastOneUnhealthyKidney = false;
    for(let i = 0; i<users[0].kidenys.length; i++){
        if(!users[0].kidenys[i].healthy){
            alteastOneUnhealthyKidney = true;
        }
    }

    //removing all the unhealthy kidneys
    const newKidneys = [];
    for(let i=0; i<users[0].kidenys.length; i++){
        if(users[0].kidenys) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidenys = newKidneys;
    res.json({mes: "done"})
})

function isThereAtleastOneUnhealthyKideny() {
    let alteastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidenys.length; i++){
        if(!users[0].kidenys[i].healthy){
            alteastOneUnhealthyKidney = true;
        }
    }
    return alteastOneUnhealthyKidney
}
app.listen(3000);