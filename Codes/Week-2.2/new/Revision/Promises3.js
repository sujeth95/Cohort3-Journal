// const fs = require("fs");

// function readTheFile(sendTheFinalValueHere) {

//     fs.readFile("a.txt","utf-8", function(err,data) {
//         sendTheFinalValueHere(data);
//     })
// }

// function readFile(fileName){
//     // read the file and return its value.
//     return new Promise(readTheFile);
// }

// const p = readFile();

// function callback(contents) {
//     console.log(contents);
// }
// p.then(callback);

//--------------------------------------------
//the real operation that we want to promisify.
function doAsyncOp(resolve){
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified(){
    return new Promise(doAsyncOp);
}

function callback(){
    console.log("3 seconds have passed");
}
p.then(callback);