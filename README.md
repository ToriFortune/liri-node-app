# liri-node-app
![dsm](https://user-images.githubusercontent.com/46722789/56844037-a88d4580-686f-11e9-8086-50d463bebba3.jpg)


Technology used
- Node.js


Prerequisites
- 

Author
- Tori Olley

APIS
- OMDB
- Axios
- TicketMaster
- Spotify






<!-- 


Create and use a standard GitHub repository with a .gitignore file for NODE. As this is a CLI App, it cannot be deployed to GitHub pages or Heroku. This time you'll need to include screenshots, a GIF, and/or a video showing us that you have the app working with no bugs. You can include these screenshots/GIFs or a link to a video in a README.md file.

Include screenshots (or a GIF/Video) of the typical user flow of your application. Make sure to include the use of Spotify, Ticket Master, and OMDB.

Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.

Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

If you haven't written a markdown file yet, click here for a rundown, or just take a look at the raw file of these instructions.

Commits
Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

Committing often is a signal to employers that you are actively working on your code and learning.

We use the mantra “commit early and often.” This means that when you write code that works, add it and commit it!

Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

Be clear and descriptive in your commit messaging.

When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.
We would like you to have well over 200 commits by graduation, so commit early and often!

Submission on BCS
Please submit the link to the Github Repository!
Instructions
Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

node_modules
.DS_Store
.env
Make a JavaScript file named keys.js.
Inside keys.js your file will look like this:
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
This file will be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.

If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.

I usually include an .env.example file that has the key names and fake values.

Make a file called random.txt.

Inside of random.txt put the following in with no extra characters or white space:

search-songs,"I Want it That Way"
Make a JavaScript file named liri.js.

At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();
Add the code required to import the keys.js file and store it in a variable.
  const keys = require("./keys.js");
You should then be able to access your keys information like so

const spotify = new Spotify(keys.spotify);
Make it so liri.js can take in one of the following commands:

search-concerts

search-songs

search-movies

feeling-lucky

What Each Command Should Do
node liri.js search-concerts <artist/band name here>

This will search the Ticket Master Artist Events API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use date-fns to format this as "MM/DD/YYYY")

node liri.js search-songs '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

Step One: Visit https://developer.spotify.com/my-applications/#!/

Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

node liri.js search-movies '<movie name here>'

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

node liri.js feeling-lucky

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run search-songs for "I Want it That Way," as follows the text in random.txt.

Edit the text in random.txt to test out the feature for search-movies and search-concerts. -->