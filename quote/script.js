document.addEventListener('DOMContentLoaded', () => {
    const quoteDiv = document.getElementById('quote');
    const generateQuoteButton = document.getElementById('generate-quote');
    const shareTwitterButton = document.getElementById('share-twitter');
    const shareFacebookButton = document.getElementById('share-facebook');
    const shareInstagramButton = document.getElementById('share-instagram');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteDiv.textContent = `"${data.content}" - ${data.author}`;
        } catch (error) {
            quoteDiv.textContent = 'An error occurred. Please try again.';
        }
    };

    const shareOnTwitter = () => {
        const quote = quoteDiv.textContent;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
        window.open(twitterUrl, '_blank');
    };

    const shareOnFacebook = () => {
        const quote = quoteDiv.textContent;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(quote)}`;
        window.open(facebookUrl, '_blank');
    };
    const shareOnInstagram = () => {
        const quote = quoteDiv.textContent;
        const instagramUrl = `https://www.instagram.com/accounts/login/?next=%2Fshare%2F&source=desktop_nav?url=&quote=${encodeURIComponent(quote)}`;
        window.open(instagramUrl,'_blank')


    };

    generateQuoteButton.addEventListener('click', fetchQuote);
    shareTwitterButton.addEventListener('click', shareOnTwitter);
    shareFacebookButton.addEventListener('click', shareOnFacebook);
    shareInstagramButton.addEventListener('click', shareOnInstagram);

    // Fetch a quote when the page loads
    fetchQuote();
});
