// function sum(a,b){
//     return parseInt(a) + parseInt(b); //For forcefuly adding int property.

// }
// let ans = sum("2",3);
// console.log(ans);

// function sum(a,b){
//     return a+b;
// }
// let ans = sum(2,3);
// console.log(ans);

// Function sum from 1 to a number.
// 1 => n
// 2 => 1 + 2 = 3
// 5 => 1 + 2 + 3 + 4 + 5 = 15

// function sum(n){
//     //More efficient formula for calculation till n.
//     let num = n * (n + 1)/2; 
//     return num;
// }

// const mod = sum(40);
// console.log(mod);

// function sum(n){
//     let ans = 0;
//     for(let i = 1;i <= n;i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// const ans = sum(40);
// console.log(ans);

// const fs = require("fs");

// const contents = fs.readFileSync("a.txt","utf-8");
// console.log(contents);

// const content2 = fs.readFileSync("b.txt","utf-8");
// console.log(content2);

//== Start all 3 tasks together, and wait for them to finish.====
// const fs = require("fs");

// fs.readFile("a.txt","utf-8", function (err,contents){
//     console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents){
//     console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function(err,contents){
//     console.log(contents);
// });

// const fs = require("fs");

// function print(err,data){

//     if(err){
//         console.log("File not found");
//     }
//     else{
//         console.log(data);
//     }
    // console.log("error is");
    // console.log(err);
    // console.log("data is");
    // console.log(data);
    // console.log(data);
// }
// fs.readFile("af.txt","utf-8", print); // asynchornously
// console.log(contents);
// fs.readFile("b.txt","utf-8", print); // asynchornously
// console.log(content2);

// console.log("Done!");

// function readFile(filePath, encoding, op){
    // read file
    // op("Error!!","hii There");
// }

// console.log("Hii !");

// function timeout(){
//     console.log("Click the button after 5 second");
// }

// setTimeout(timeout, 5000);

// console.log("Welcome to loupe.");

// let c = 0;
// for(let i = 0; i<10000000; i++){
//     c = c + 1;
// }
// console.log("Expensive operation done.");

const fs = require("fs");

function cb(err, data){
    // err- There was an error while reading the file.
    // metadata: {permission: "denied"}
    console.log(typeof err);
}
fs.readFile("aaa.txt","utf-8", cb);