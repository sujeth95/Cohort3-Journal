/* NOTE: Promise class gives you a promise, that will
return you something in the future */

// function logName() {
//     console.log("Harkirat");
// }

// setTimeout(logName, 3000);

/* NOTE: We can always use :
1. Callback based approach (uses async operation)
2. Promise based approach (promises are cleaner way to approach)
*/
//--------------------------------------------------------------------------

// function setTimeoutPromisified(ms){
//     let p = new Date();   // Object of the date class
//     return p;
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);
//---------------------------------------------------------------------------

// function waitFor3S(resolve){
//     setTimeout(resolve,10000);
// }

// function setTimeoutPromisified() {
//     return new Promise(waitFor3S);
// }

// function main() {
//     console.log("main is called");
// }

// setTimeoutPromisified().then(main); //Promise based approach

// setTimeout(main, 3000); // callback based approach
//------------------------------------------------------------------------------
//PROMISIFIED APPROACH
/* const fs = require("fs");
function fileRead(err, data){

}
fs.readFile("a.txt","utf-8").then(fileRead);
*/
//--------------------------------------------------------------------------------------

// function random(resolve){    //resolve is also a function.
//     setTimeout(resolve, 3000);
//     // resolve();
// }

// let p = new Promise(random);   //A Promise is supposed to return you something eventually.

// //using the eventual value returned by the promise
// function callback() {
//     console.log("Promise Succeded")
// }

// p.then(callback);

//-------X----------------------X-----------------------------X------------------------X-----------------
//                    ---ASSIGNMENT---
// //(Q) Create the promisifed version of fs.readFile, fs.writeFile, cleanFile
// cleanFile("a.txt").then(function() {
//     console.log("File is cleaned.");
// });

//-------------------X----------------------X---------------------X---------------------X------------------

// UNDERSTANDING EVERYTHING IN DETAIL

// const fs = require("fs");

// function readTheFile(sendTheFileValueHere){

//     // do your thing, whenever you have the final value, call sentTheFileValueHere("finalValue");
//     fs.readFile("a.txt", "utf-8", function(err,data) {
//         sendTheFileValueHere(data);
//     })
// }

// function readFile(fileName) {
//     //read the file and return its value
//     return new Promise(readTheFile);
// }

// // const p = await readFile("a.txt");   //Here (p) is the proxy to the actual value of the file.
// const p = readFile();

// function callback(contents) {   //Here (contents) means asking contents of the file.
//     console.log(contents);
// }
// p.then(callback);   // This line means whenever file is read, call this callback function.
//--------------------------------------------------------------------------------------------------------

// GREAT EXPLAINATION TO UNDERSTAND PROMISE..........
// const fs = require("fs");

// console.log("----top of the file-----"); //#1

// function readTheFile(resolve){ 
//     console.log("ReadTheFile called");  //#3
//     setTimeout(function(){
//         console.log("callback based setTimeout completed");  //#5
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified(fileName) {
//     console.log("setTimeoutPromisified called"); //#2.2
//     // read the file and return its value
//     return new Promise(readTheFile);
// }

// const p = setTimeoutPromisified(); //#2

// function callback() {
//     console.log("Time is done.");   //#6
// }

// p.then(callback);

// console.log("----End of the file----");  //#4
//=================================================================================

//PROMISE CLASS CONSTRUCTOR
// class Promise2 {
//     constructor(fn) {
//         function afterDone() {
//             this.resolve();
//         }
//         fn(afterDone);
//     }
//     then(callback) {
//         this.resolve = callback;
//     }
// }

// function readTheFile(resolve) {
//     console.log("readTheFile called");
//     setTimeout(function() {
//         console.log("Callback based setTimeout completed");
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified() {
//     return new Promise2(readTheFile);
// }

// let pb = setTimeoutPromisified();
// function callback() {
//     console.log("callback has been called.");
// }
// pb.then(callback);
//-------------------------------------------------------------------------------

//ANOTHER APPROACH TO LEARN ABOUT PROMISES.

//the real operation that we want to promisfy
// function doAsyncOp(resolve) {
//     setTimeout(resolve,3000);   //setTimeout is: old, callback based, async function.
// }

// function setTimeoutPromisified() {
//     return new Promise(doAsyncOp);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("3 seconds have passed.");
// }
// p.then(callback);

//---------------------OR--------------------------------------------------------------------
// function setTimeoutPromisified(time) {
    
//      return new Promise(function(resolve){
//          setTimeout(resolve, time);
//     })
// }

// function callback() {
//     console.log("Time has passed");
// }

// const p = setTimeoutPromisified(5000);
// p.then(callback);
//--------------------------------------------------------------------------------------------
// ANOTHER EXAMPLE...

// const p = new Promise(function(resolve){
//     let c = 0;
//     for(let i = 0; i<100000; i++){
//         c++;
//     }
// })

//           OR
// function promiseFn(resolve){
//     let c = 0;
//     for (let i = 0; i<1000;i++){
//         c++;
//     }
//     resolve();
// }

// const p = new Promise(promiseFn);
// function callback() {
//     console.log("Hii There");
// }
// p.then(callback);

//----------------------------------------------
//SETTING UP STRING IN RESOLVE AND PRINTING STRING
function promiseFn(resolve) {
    let c = 0;
    for(let i = 0; i<10000; i++){
        c++;
    }
    resolve("hii there orange.");
}

const p = new Promise(PromiseFn);

function callback(str){
    console.log(str);
}
p.then(callback);