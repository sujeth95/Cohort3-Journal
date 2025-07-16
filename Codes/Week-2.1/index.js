// TypeScript
// Parse it to a number

// function sum(a,b){
//     return parseInt(a) + parseInt(b);
// }
//-------- ALSO CAN WRITE ----------
// let ans = sum("20",30);
// console.log(ans);

// function sum(a,b){
//     return a + b;
// }

// let ans = sum("20",30);
// console.log(ans);

// ------NEXT QUESTION-----

// function sum(n){
//     let ans = 0;
//     for(let i = 1;i <= n;i++){
//         ans += i;
//     }
//     return ans;
// }
// const ans = sum(100);
// console.log(ans);

// let fs = require("fs"); // fs stands for File System

// const contents = fs.readFileSync("a.txt", "utf-8");  // bytes, hex
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt","utf-8");
// console.log(contents2);


// ===== Calling the respective function ======
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

// let ans = subtract(1,2);
// console.log(ans);

// ==== Passing in what needs to be done as an argument. =======
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

// function doOperation(a,b,op){
//     let val = op(a,b);
//     return val;
//     }


// let ans = doOperation(1,2,sum);
// console.log(ans);

//========== Asynchronous Code =========
const fs = require("fs");

function print(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf-8", print);

fs.readFile("b.txt","utf-8", print);

console.log("Done!");