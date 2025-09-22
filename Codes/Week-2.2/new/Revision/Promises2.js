function random(resolve){  // resolve is also a function
    resolve();
}

let p = new Promise(random); //supposed to return you something eventually.

// using the eventual value returned by the promise
function callback(){
    console.log("Promise succeded");
}
p.then(callback);