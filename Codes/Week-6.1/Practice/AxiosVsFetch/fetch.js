//Axios VS Fetch
//Axios => External Library -> axios is much smarter library then fetch
//Fetch => Internal Library

const { response } = require("express");

// function main() {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then(async response => {
//             const json = await response.json(); //NOTE: Json is a async function.
//             //await response.text()
//             console.log(json);
//         }) 
// }

//NOTE: Always prefer to write async await function rather than .then function.
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const json = await response.json();
    console.log(json.length);
}

main();