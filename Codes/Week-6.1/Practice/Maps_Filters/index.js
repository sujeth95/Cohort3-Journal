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

//NOTE: Whenever you are told to transform array , you use map.

// function transform(i){
//     return i * 2;
// }
// const ans = input.map(transform);
// console.log(ans);
const ans = input.map(function(i){
    return i * 2;
});
console.log(ans);

//H.W -> create a map function that takes 2 inputs an array, 
//and a transformation callback/fn and transforms the array
//array into a new one using the transformation fn.