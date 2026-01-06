// function findSum(n) {
//     let ans = 0;
//     for (let i = 1; i < n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// let ans = findSum(100);
// console.log(ans);

// ======== Learning Callbacks ============

// finds the square/cube of the input
// function square(n) {
//     return n * n;
// }
// function cube(n){
//     return n * n * n;
// }

// // finds the sum of the squares of the inputs
// function sumOfSquares(a, b) {
//     const val1 = square(a);
//     const val2 = square(b);

//     return val1 + val2;
// }
// // find the sum of the cubes of the inputs
// function sumOfCubes(a, b) {
//     const val1 = cube(a);
//     const val2 = cube(b);

//     return val1 + val2;
// }

// console.log(sumOfSquares(1, 2));
// console.log(sumOfCubes(1, 2));     // logging sumOfCubes

// -----------------------------------------------------------------------
// function square(n) {
//     return n * n;
// }
// function cube(n) {
//     return n * n * n;
// }

// function sumOfSomething(a, b, callback) {
//     console.log(`a is: ${a}`);
//     console.log(`b is: ${b}`);
//     console.log(`callback is: ${callback}`);
//     const val1 = callback(a);
//     const val2 = callback(b);
//     return val1 + val2;
// }

// console.log("The 
// answer to something: " +sumOfSomething(2, 2, cube));

//------ Anonymous Functions -> Function which doesn't have name. ---------------------------------------------------------------------------
function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

sumOfSomething(a, b, function(a) {
    return a * a;
})