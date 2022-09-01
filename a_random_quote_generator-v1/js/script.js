/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/***
 * `getRandomQuote` function
***/
//Accomplish three tasks: use Math.floor, Math.random and the length of the quotes array
//utilize the for loop to pass the quotes array as an arguemnt
const quotes = [
  {
     quote: 'When you undervalue what you do, the world will undervalue who you are.',
     source: 'Oprah Winfrey'
  },
  {
    quote: 'Good thoughts are powerful. Negatives thoughts are weak. Decide what U want to be, have, do, and think the thoughts of it. Your vision will become your life. Hold on to the thought of what you want. Make it absolutely clear in your mind. You become what you think about most. You attract what you think about most.',
    source: 'Serena Williams',
    citation: 'Think. Do. Be."—Queen Of The Court: An Autobiography',
    year: 2009
  },
  {
    quote: 'Whatever your image of yourself is, it always draws onto itself everything that belongs to it.',
    source: 'Reverend Ike',
    citation: 'Speech'
 },
 {
  quote: 'Your word is your wand. The words you speak create your own destiny.',
  source: 'Florence Scovel-Shinn',
  citation: 'The Writings of Florence Scovel Shinn',
  year: 1925-1945
},
{
  quote: 'If you want a new outcome, you will have to break the habit of being yourself, and reinvent a new self.',
  source: 'Dr. Joe Dispenza',
  citation: 'Breaking the Habit of Being Yourself: How to Lose Your Mind and Create a New One',
  year: 2013
},
];

  // Return variable storing the random quote object
  //Created the getRandomQuote function

  function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * (quotes.length) );
  
    return quotes[randomQuote];
  }

/***
 * `printQuote` function
***/
//Created the printQuote function
function printQuote() {
  let motivationalQuote = {};
  motivationalQuote = getRandomQuote(); 
  console.log(`motivalQuote: ${motivationalQuote.quote}`);
  let html = "<p class = 'quote'>" + motivationalQuote.quote + "</p>";
  html += "<p class = 'source'> " + motivationalQuote.source;
console.log(getRandomQuote());
  if ('citation' + motivationalQuote) {
    html += "<span class = 'citation'> " + motivationalQuote.citation + "</span>";
  } 
  if ('year' + motivationalQuote) {
    html += "<span class = 'year'>" + motivationalQuote.year + "</span>";
  }
  let message = 
    `<p class = 'quote'>${result.quote}</p>;
    <p class = 'source'>${result.source}</p>;
    <span class = 'citation'>${result.citation}</span>;
    <span class = 'year'> ${result.year}</span>;`
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);