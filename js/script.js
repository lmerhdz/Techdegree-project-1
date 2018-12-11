/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//Array of quote objects
var quotes = [
  {
  quote: "Stay hungry, stay foolish",
  source: "Steve Jobs",
  citation:'Speech',
  year:2005,
  tags: "Business"
},
  {
  quote: "Weakness of attitude becomes weakness of character.",
  source: "Albert Einstein",
  citation:'',
  year:"",
  tags: "Philosophy"
},
  {
  quote: "You can't make a good deal with a bad person.",
  source: "Warren Buffett",
  citation:'',
  year: "",
  tags: "Entrepreneurship"
},
  {
  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  source: "Mahatma Gandhi",
  citation:'',
  year:"",
  tags: "Education"
},
  {
  quote: "If you want to test a man's character give him power.",
  source: "Abraham Lincoln",
  citation:'',
  year:"",
  tags: "Philosophy"
},
  {
  quote: "Falling down is how we grow, staying down is how we die.",
  source:"Brian Vaszily",
  citation:'Movie',
  year:2000,
  tags: "Life"
}
];


//This function creates a random quote
function getRandomQuote(array){
  var index = Math.floor(Math.random()* quotes.length);
  //Loop to go through the quotes as long as its less then its length.
  for(var i = 0; i < array.length; i +=1){
    var randomQuote = array[index];  //Stores the array in the variable randomQuote.
  }
  //Returns the random quote to the fucntion getRandomQuote.
  return randomQuote;
}
 function randomBgColor(){
   red = Math.floor(Math.random() * 256);
   green = Math.floor(Math.random() * 256);
   blue = Math.floor(Math.random() * 256);
   var randomColor = "rgb(" + red + "," + green + "," + blue + ")";
   document.getElementById('bgcolor').style.backgroundColor = randomColor;
   return randomColor;
 }

function printQuote(){
  //Calls the randomBgColor function to change the background color when printQuote function gets called
  randomBgColor();
  //qoteToPrint stores the array of quote objects
  var quoteToPrint = getRandomQuote(quotes);
   //Empty string is created to store variable.
  var message = '';
  message = '<p class="quote">' + quoteToPrint.quote + '</p>';
  message += '<p class="source">' + quoteToPrint.source;
  //Conditional statements are created for the citation, year and tags properties.
    if(quoteToPrint.citation){
      message += '<span class="citation">' + quoteToPrint.citation + '</span>';
    }else {
      message += '';
    }
    if (quoteToPrint.year) {
      message += '<span class="year">' + quoteToPrint.year + '</span>';
    }else {
      message +='';
    }
    if (quoteToPrint.tags) {
      message += '<span class="tags">' + quoteToPrint.tags + '</span>';
    }else {
      message +='';
    }
  message += '</p>';

  document.getElementById('quote-box').innerHTML = message;
}
//Calls the printQuote function for quote to be printed.
printQuote();
//Calls the randomBgColor function for background color to change.
randomBgColor();


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
