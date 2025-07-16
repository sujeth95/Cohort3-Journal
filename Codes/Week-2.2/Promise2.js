// function callback(){
//     console.log("5 second has passed.");
// }

// setTimeoutPromisified(5000).then(callback);   // syntactically cleaner.
// ----------------OR--------------------------

// setTimeoutPromisified(5000).then(function callback(){
//     console.log("5 seconds have passed.");
// });   // syntactically cleaner.
//--------------------------ALSO------------------
// function waitfor3s(resolve){
//     setTimeout(resolve, 5000);
// }

// function setTimeoutPromisified(){
//     return new Promise(waitfor3s);
// }

// function main(){
//     console.log("Main is called");
// }

// setTimeoutPromisified().then(main);  //PROMISE BASED APPROACH

// setTimeout(main, 3000);  //CALLBACK BASED APPROACH

// function setTimeoutPromisified(){  //Assume that this is a global function.
//     return new Promise();
// }

// function callback(){
//     console.log("3 seconds have passed.");
// }

// setTimeoutPromisified(3000).then(callback);
//-------------------------------------------------------------------------------------

// function random(resolve){    //NOTE: Resolve is also a function.
//     setTimeout(resolve,3000);
// }

// let p = new Promise(random);   //NOTE: A Promise is supposed to return you something eventually.
// // let p = new Map();


// // using the eventual value returned by the promise.
// function callback(){
//     console.log("Promise succeded.");
// }
// p.then(callback);
//---------------------------------------------------------------------------------------------------------
//Q1. Create the promisifed version of fs.readFile, fs.writeFile, cleanFile

/*Q2. Write a function that: 
1. Reads the contents of a file
2. Trims the extra space from the left and right
3. Writes it back to the file. */
const fs = require("fs");

console.log("---------TOP OF THE FILE---------------");

function readTheFile(sendTheFinalValueHere){

    // do your thing, whenever you have the final value, call sendTheFileValueHere("finalValue");
    fs.readFile("a.txt","utf-8", function(err,data){
        sendTheFinalValueHere(data);
    });
}

function readFile(fileName){
    //read the file and return its value
    return new Promise(readTheFile);   // Defining a Promise
}

const p = readFile("a.txt");

function callback(contents){
    console.log("timer is done");
}

p.then(callback);
console.log("------------end of the file----------");