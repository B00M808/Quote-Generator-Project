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
console.log(quotes);
  // Return variable storing the random quote object
  function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length) );
  
    return quotes[randomQuote];
  }

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);