function init() {
    document.body.style.background = 'url(bonnie1.jpg) no-repeat center center'
}

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// show new quote 
function newQuote() {
    // pick random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // checkign if there is an author
    if (!quote.author) {
        authorText.textContent = 'Uknown';
    } else {
        authorText.textContent = quote.author;
    }
    // check quote length to determin styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        // catch error here
    }
}

// on load
getQuotes();