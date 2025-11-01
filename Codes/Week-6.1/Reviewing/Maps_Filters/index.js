// maps, filter and arrow fns
// Q. Given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

const input = [1, 2, 3, 4, 5];
//solution

// const newArr = [];

// for (let i = 0; i < input.length; i++) {
//     newArr.push(input[i] * 2);
// }

// console.log(newArr);

function transform(i) {
    return i * 2;
} 

const ans = input.map(transform);
console.log(ans);

//Assignment: Create a map function that takes 2 inputs
// an array, and a transformation callback/fn and transforms 
// the array into a new one using the transformation function.
