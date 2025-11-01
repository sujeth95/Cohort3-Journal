// Filtering
// what if I tell u, given a input array, give me back all the even values from it

const arr = [1, 2, 3, 4, 5];

//answer:
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);

// ----ANOTHER METHOD----
// let ans = arr.filter(x => x % 2 == 0 )  // ALSO A METHOD
// console.log(ans);

// ----RIGHT METHOD---
function filterLogic(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const ans = arr.filter(filterLogic);
console.log(ans);

//NOTE: use logic n.startsWith("h") to find word h.


// Assignment: Create a map fn that takes an array and a 
// transform function as input and returns the transformed
// array as output.