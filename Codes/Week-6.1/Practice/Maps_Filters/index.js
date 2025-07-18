//map, filter, arrow fns

// function sum(a,b){
//     return a+b;
// }

// const sum = (a,b) => {
//     return a + b;
// }

// app.get("/", (req,res) => {

// })

// app.get("/", function(req,res){

// })

// const ans = sum(1,2);
// console.log(ans);


// Q. Given an array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]
// Answer: 

const input = [1, 2, 3, 4, 5];

// const newArray = [];

// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2);
// }

// console.log(newArray);
function transform(i){
    return i * 2;
}
const ans = input.map(transform);
console.log(ans);