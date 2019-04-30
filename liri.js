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
const keys = require("./keys");
// data from file system
const fs =require ("fs");
// spotify function to be exported from spotify.js
// const spotify = require("./spotify.js");
// ticketmaster.js file to be created
// const ticketMaster = require("./ticketMaster")
var Spotify = require('node-spotify-api');
 
const spotify = new Spotify(keys.spotify);
const apiKey = keys.ticketmaster.key;


function getEvents(artist) {
    console.log(`Artist: ${artist}`) 
}

const command = process.argv[2];
const value = process.argv[3];

switch (command) {
    case "search-concerts":
        getEvents(value);
        break;
    case "search-songs":
        getSongs();
        break;
    case "search-movies":
        getMovies();
        break;
    case "feeling-lucky":
        lucky();
        break;
    default:
        console.log("Please enter a valid command");

}

console.log("loaded")