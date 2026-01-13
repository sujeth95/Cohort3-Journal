//Question 1:
// let num = 2;
// if (num % 10 == 0) {
//     console.log("Good");
// } else {
//     console.log("Bad");
// }

// Question 2:
// let fullName = prompt("Enter Your Name:");
// let age = prompt("Enter Your Age: ");

// const ans = alert(`${fullName} is ${age} years old.`);
// console.log(ans);

// Question 3:
// let quarter = 2;

// switch (quarter) {
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("You have enter a wrong quater.")
// }

// Question 4:
// let str = "Apples";

// if((str[0] === 'a' || str[0] === "A") && str.length > 5) {
//     console.log("Golden");
// } else {
//     console.log("Not");
// }

// Question 5:
// let num1 = 50, num2 = 10, num3 = 20;

// if (num1 > num2) {
//     console.log(`${num1} is largest.`);
// } else if (num2 > num3) {
//     console.log(`${num2} is largest.`);
// } else {
//     console.log(`${num3} is largest.`);
// }

// Question 6:
let num1 = 38392;
let num2 = 2221;

const len1 = num1.length
if((num1.toString().slice(-1) == 2) && (num2.toString().slice(-1) == 2)) {
    console.log("Both have same digit");
} else {
    console.log("Both don't have same last digit.")
}