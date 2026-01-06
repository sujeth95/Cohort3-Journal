// function getLength(str) {
//   console.log("Original String:", str);
//   console.log("Length:", str.length);
// }
// getLength("Hello World");

//===============================================
// function findIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.indexOf(target));
// //   console.log("Index:", str.lastIndexOf(target));  // to find the index of last character if they have same characters.
// }
// findIndexOf("Hello World", "World");

//====================================================================================================================================
// function findLastIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.lastIndexOf(target));
// }
// findLastIndexOf("Hello World World", "World");

//========================================================================
// function getSlice(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After slice:", str.slice(start, end));
// }
// getSlice("Hello World", 0, 5);

// const value = "Sujeet Oraon";
// let ans = value.slice(0, 6);  // The above argument can also be written as such in short.
// console.log(ans);

// CAN BE WRITTEN WITH OWN---------------------------
// function cutIt(str, startIndex, endIndex) {
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (i >= startIndex && i < endIndex) {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }

// const value = "SujeetOraon";

// let ans2 = value.slice(2, 5);
// console.log(ans2);
// console.log(cutIt(value, 2, 5));

// =====================================================================================================

// function replaceString(str, target, replacement) {
//   console.log("Original String:", str);
//   console.log("After replace:", str.replace(target, replacement));
// }
// replaceString("Hello World", "World", "JavaScript");

// // Can write by own without using functions.
// const str = "hello world";
// console.log("String after replace: " + str.replace("world", "javascript"));

// ==================================================================================================
// function splitString(str, separator) {
//   console.log("Original String:", str);
//   console.log("After split:", str.split(separator));
// }
// splitString("Hello World", " ");

// // Written by own---
// const value = "hii my name is sujeet";
// const words = value.split(" ");

// console.log(words);

// ==========================================================================================================
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// Written by own==========
const value = "      sujeet oraon        ";
console.log(value.toUpperCase()); // To UpperCase the entire sentence.
console.log(value.trim());