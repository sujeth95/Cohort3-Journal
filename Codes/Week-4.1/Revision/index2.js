const path = require("path");
console.log(__dirname);
console.log(__dirname + "/../../index.js" + "/projects" + "/index.js");
console.log(path.join(__dirname, "../../index.js", "/projects", "/index.js")); //path library helps to join mutliple directories,sub-directories in single line.