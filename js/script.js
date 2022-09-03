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
//Created and stored quotes in an Array 
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
  year: 1925
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
    const randomNumber = Math.floor(Math.random() * (quotes.length) );
    return quotes[randomNumber];
  };
  // getRandomQuote();

 //If Statement
/***
 * `printQuote` function
***/

//Created the printQuote function to display for end-user

function printQuote() {
  let motivationalQuote = getRandomQuote();

  let html = "";
  if(motivationalQuote){
    html = html + `<p class="quote">${motivationalQuote.quote}</p>`;
    html = html + `<p class="source">${motivationalQuote.source}`;
    
  }
  if(motivationalQuote.citation){
    html = html + `<span class="citation">${motivationalQuote.citation}</span>`;
  }

  if(motivationalQuote.year){
    html = html + `<span class="year">${motivationalQuote.year}</span>`;
  }
  html = html + `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);