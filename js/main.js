

var quotes = [
  {
   "quote":"The best way to get started is to quit talking and begin doing.",
    "auth":"Walt Disney"
  },
   {
   "quote":"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "auth":"Winston Churchill"
  },
   {
   "quote":"Don't let yesterday take up too much of today.",
    "auth":"Walt Disney"
  },
   {
   "quote":"Be yourself; everyone else is already taken",
    "auth":"Oscar Wilde"
  },
   {
   "quote":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "auth":"Marilyn Monroe"
  },
   {
   "quote":"So many books, so little time.",
    "auth":"Frank Zappa"
  },
   {
   "quote":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    "auth":"Albert Einstein"
  },
   {
   "quote":"A room without books is like a body without a soul",
    "auth":"Marcus Tullius Cicero"
  },

]


var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var auth = document.getElementById("auth");

btn.addEventListener("click", function(){
  var randomNum = Math.floor(Math.random() * quotes.length);
  var quoteText = quotes[randomNum]['quote'];
  var author = quotes[randomNum]['auth'];
  
  quote.innerText = quoteText;
  auth.innerText = author;

});

