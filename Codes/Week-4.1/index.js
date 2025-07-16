console.log(__dirname); //--> Helps to get the path of the directory.
const path = require("path");
console.log(__dirname + "/../../index.js" + "/projects" + "/index.js"); //--> Helps to get the path of the file including the file.
console.log(path.join(__dirname,"../../index.js", "/projects", "/index.js"))  //--> Helps to join multiple sub-directories, future directories , projects.