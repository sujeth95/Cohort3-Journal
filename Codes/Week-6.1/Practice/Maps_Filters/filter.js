//filtering
//what if I tell u, given an input array, give me back all the even values from it.

const arr = [1, 2, 3, 4, 5]

//answer
const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//Effective way
function filterLogic(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
const ans = arr.filter(filterLogic); //This is considered as conventionally more cleaner syntax
console.log(ans);

//Assignment => create a map fn that takes an array and a transform fn as input and returns the transformed array as output.