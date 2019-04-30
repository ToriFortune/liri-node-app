// // why did I create this file?
// // review to be sure if this is necessary, may be deleted

// const fs = require ("fs");
// fs.writeFile(random.txt, "insert necessary array" (err)=>{ 
// if (err) return 
// console.log (err);
// });
// need to create spotify, ticket master js files 


// require config
require("dotenv").config();

// data from file system
var fs =require ("fs");
// spotify.js file to be created
var spotify = require("./spotify.js");
// ticketmaster.js file to be created
var ticketMaster = require("./ticketMaster")