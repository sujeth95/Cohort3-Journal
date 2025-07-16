// Typescript
// Parse it to a number. 

// function sum(a,b){
//     return a+b;      //return parseInt(a)+parseInt(b);
// }
// let ans = sum(2,3);  //let ans = sum("2",3);
// console.log(ans);
//--------------------------------------------------------------
// Finding sum from 1 to 10 using for-loop
// function sum(n){
//     let ans = 0;
//     for(let i = 1; i<=n;i++){
//         ans = ans + i;
//     }
//     return ans;
// }
// const ans = sum(100);
// console.log(ans);
//---------------------------------------------------------------
// FINDING SUM FROM 1 TO 100 BY NOT USING FOR-LOOP
// 1 => n
// 2 => 1 + 2 = 3
// 5 => 1 + 2 + 3 + 4 + 5 = 15
// function sum(n){
//     return n * (n+1)/2;
// }
// const ans = sum(100);
// console.log(ans);
//---------------------------------------------------------------
//SYNCHRONOUS CODE
// function sum(n){
//     let ans = 0;
//     for(let i = 1; i<=n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }
// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);
//--------------------------------------------------------------
//I/O Heavy Tasks.
// const fs = require("fs");

// const contents1 = fs.readFile("a.txt","utf-8"); //READING THE FILE ASYNCHORONOSLY   // we can read data with bytes, hex.
// console.log(contents1);
// const contents2 = fs.readFileSync("b.txt","utf-8");  // READING THE FILE SYNCHORONOSLY.
// console.log(contents2);
//----------------------------------------------------------------
// Start all 3 tasks together, and wait from them to finish.
// const fs = require("fs");

// fs.readFile("a.txt","utf-8", function (err, contents){
//     console.log(contents);
// });
// fs.readFile("b.txt","utf-8", function (err,contents){
//     console.log(contents);
// });
// fs.readFile("a.txt","utf-8", function (err,contents){
//     console.log(contents);
// });
//---------------------------------------------------------------------
//FUNCTIONAL ARGUMENTS
// Calling the respective function(Approach #1).
// function sum(a,b){
//     return a+b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function divide(a,b){
//     return a/b;
// }

// const ans = sum(1,2)
// console.log(ans);
//--------------------------------------------------------------
// Passing in what needs to be done as an argument(Approach #2)
// function sum(a,b){
//     return a+b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function divide(a,b){
//     return a/b;
// }
// function doOperation(a,dumbArg,op){
//     function op(a,dumbArg){
//         return a+dumbArg;
//     }
//     return op(a,dumbArg);
// }
// const ans = doOperation(1,2,sum)
// console.log(ans);
//----------------------------------------------------------------------
// ASYNCHORONOSLY JAVASCRIPT
// const fs = require("fs");

// function print(err, data){
//     console.log(data);
// }

// fs.readFile("a.text","utf-8", print);  // Asynchornously

// fs.readFile("b.txt", "utf-8", print);  // Asynchornously

// console.log("Done!");

// function readFile(filePath, encoding, op){
//     // Read File
//     op("Error!!","Hii There");
// }
//----------------------------------------------------------------------------
//FINDING ERROR
// const fs = require("fs");

// function print(err,data){
//     console.log("error is");
//     console.log(err);
//     console.log("data is");
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",print);
// // fs.readFile("b.txt","utf-8",print);
//---------------------------------------------------------
//USING IF STATEMENT AND SOLVING NEXT ABOVE.
// const fs = require ("fs");

// function print(err,data){
//     if(err){
//         console.log("File Not Found!");
//     } else{
//         console.log(data);
//     }
// }
// fs.readFile("ad.txt","utf-8",print); // asynchronously

// console.log("Done!")
//--------------------------------------------------------------------
//SEEING SETTIMEOUT
// console.log("Hii");

// function timeout(){
//     console.log("Click the button");
// }

// setTimeout(timeout, 5000);

// console.log("Welcome to loupe");
//----------------------------------------------------------------------------
//SEEING setTimeOut USING FOR-LOOP
// console.log("Hii");

// function timeout(){
//     console.log("Click the button");
// }

// setTimeout(timeout, 1000);

// console.log("Welcome to loupe");

// let c = 0;
// for(let i = 0; i<1000000000; i++){
//     c = c + 1;
// }
// // console.log(c);
// console.log("Expensive operation done.");
//-------------------------------------------------------------------------------
// SETTING setTimeOut synchronous.
function setTimeoutSync(timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if(currentTime.getTime() - startTime.getTime() > timeout){
            break;
        }
    }
}
setTimeoutSync(1000);
console.log("Hii There");