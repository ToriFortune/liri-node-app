// // why did I create this file?
// // review to be sure if this is necessary, may be deleted

// const fs = require ("fs");
// fs.writeFile(random.txt, "insert necessary array" (err)=>{ 
// if (err) return 
// console.log (err);
// });
// need to create spotify, ticket master js files 

// const spotify = new Spotify(keys.spotify);
// console.log ("keys");
// require config
require("dotenv").config();
const keys = require("./keys");
// data from file system
const fs =require ("fs");
const axios =require("axios");

// spotify function to be exported from spotify.js
// const spotify = require("./spotify.js");
// ticketmaster.js file to be created
// const ticketMaster = require("./ticketMaster")
const Spotify = require('node-spotify-api');
 
let spotify = new Spotify(keys.spotify);
const ticketMaster = keys.ticketmaster.key;


console.log(ticketMaster);

const command = process.argv[2];
const value = process.argv[3];

function getEvents(artist) {
    console.log(`Artist: ${artist}`) 
}


fs.appendFile("random.txt", command + ",", function(err){
    if (err) throw err;
});

switch (command) {
    case "search-concerts":
        getEvents(value);
        break;
    case "search-songs":  // search spotify
        getSongs();
        break;
    case "search-movies": // search omdb for movies
        getMovies();
        break;
    case "feeling-lucky":
        lucky();
        break;
    default:
        console.log("The Sign by Ace of Base.");

// }
// function getMovies(movies){
//     var queryUrl = 
// };

// create a function to call for songs
function getSongs (songs){
    spotify
    .search({type: "track", query: "song"})
    .then(function(response){
        if (response.track===0){
          console.log("No results found");
                  }
                  else{
                      ccnsole.log("Artist" +response.track.item[0].artist[0].name);
                 console.log("Track: " + response.tracks.items[0].name);
                console.log("Preview URL: " + response.tracks.items[0].preview_url);
                console.log("Album: " + response.tracks.items[0].album.name);
            }
    })
}

const TicketMaster = require('node-ticketmaster-api');