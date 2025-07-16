/* A Promise in JavaScript is an object that represents the eventual  
completion (or failure) of an asynchronous operation and its resulting value.*/

//PROMISES....
// function main(){

// }
// setTimeout(main, 3000); // Call Back the main function.

//setTimeout

// returns an object of the promise class
function setTimeoutPromisified(ms){     // ms : milisecond
    let p = new Promise (resolve => setTimeout(resolve, ms));
    return p;
    // object of the Promise class
}

function callback(){
    console.log("3 seconds have passed.");
}

setTimeoutPromisified(3000).then(callback);