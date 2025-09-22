function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
}

function callback() {
    console.log("3 seconds have passed");
}

let p = setTimeoutPromisified(3000); // object of the Promise class.
console.log(p);