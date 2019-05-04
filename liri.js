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
var axios =require("axios");
const ticketMaster=("./ticketMaster")
const moment =require("moment")
// spotify function to be exported from spotify.js
// const spotify = require("./spotify.js");
// ticketmaster.js file to be created
// const ticketMaster = require("./ticketMaster")
const Spotify = require('node-spotify-api');
 
const spotify = new Spotify(keys.spotify);
const apiKey = keys.ticketmaster.key;



// console.log(ticketMaster);
// nodeArg =process.argv [0]
const command = process.argv[2];
const criteria = process.argv[3];


switch (command) {
    case "search-concerts":
        getEvents(criteria);
        break;
    case "search-songs":  // search spotify
        getSongs(criteria);
        break;
    case "search-movies": // search omdb for movies
        getMovies(criteria);
        break;
    case "feeling-lucky":
        luckyRandom(criteria);
        break;
    default:
        console.log("The Sign by Ace of Base.");
    };



    function getMovies(criteria) {
        if (!criteria) {
            criteria = "Mr. Nobody";
        }
        axios.get("http://www.omdbapi.com/?t=" + criteria + "&apikey=trilogy").then(
            function(response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].criteria);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        );
    };
    



function luckyRandom(){
    fs.readFile("random.txt", "utf8", function (error, data){
        if (error){
            return console.log(error);
        };

        var dataArray = data.split(",");


