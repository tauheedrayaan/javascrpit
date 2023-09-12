function fetchRandomQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Choose a random quote from the array of quotes
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
  
        // Update the HTML with the random quote
        const quoteContainer = document.querySelector('.quote');
        quoteContainer.innerHTML = `<p>"${randomQuote.text}"</p><p>- ${randomQuote.author || 'Unknown'}</p>`;
      })
      .catch((error) => {
        console.error('Error fetching random quote:', error);
        const quoteContainer = document.querySelector('.quote');
        quoteContainer.innerHTML = '<p>Unable to fetch a random quote</p>';
      });
}

const newQuoteButton = document.getElementById('new-quote-btn');
newQuoteButton.addEventListener('click', fetchRandomQuote);

window.addEventListener('load', fetchRandomQuote);

