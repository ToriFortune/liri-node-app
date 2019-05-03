const keys =re("./keys");
// data from files system
const fs = require("fs");
// axios npm package
const axios = require("axios")
const moment =require("moment");

function getEvents(){
    const artist =("");
    var url = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=SUL2kA5hQKl31qCY7zfaD74hzDLAAdNo"
axios.get (url).then(
    function(response)
)

}