const quotes = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "In order to be irreplaceable, one must always be different. – Coco Chanel",
    "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "Stay hungry, stay foolish. – Steve Jobs",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. – Bill Gates",
    "It’s not about having the right opportunities. It’s about handling the opportunities right. – Mark Cuban",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "Simplicity is the soul of efficiency. – Austin Freeman",
];

// --- Cool Animations ---

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in for main card
    const card = document.querySelector('.card');
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
        card.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
    }, 200);

    // Salamander logo pop-in
    const logo = document.querySelector('.salamander-logo');
    logo.style.opacity = 0;
    logo.style.transform = 'scale(0.7)';
    setTimeout(() => {
        logo.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
        logo.style.opacity = 1;
        logo.style.transform = 'scale(1)';
    }, 500);

    // Dev quote typewriter effect - continuously popping up
    const quoteEl = document.querySelector('.dev-quote');
    function showQuoteWithTypewriter(quote, callback) {
        quoteEl.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < quote.length) {
                quoteEl.textContent += quote.charAt(i);
                i++;
                setTimeout(typeWriter, 22);
            } else if (callback) {
                setTimeout(callback, 2000); // Show quote for 2s after typing
            }
        }
        typeWriter();
    }

    function cycleQuotes(lastIndex = -1) {
        let idx;
        do {
            idx = Math.floor(Math.random() * quotes.length);
        } while (idx === lastIndex && quotes.length > 1);
        showQuoteWithTypewriter(quotes[idx], () => cycleQuotes(idx));
    }

    setTimeout(() => cycleQuotes(), 1000);

    // Subtitle typewriter effect (only on fresh load)
    const subtitleEl = document.querySelector('.subtitle');
    const subtitleText = subtitleEl.textContent;
    subtitleEl.textContent = '';
    let j = 0;
    function typeWriterSubtitle() {
        if (j < subtitleText.length) {
            subtitleEl.textContent += subtitleText.charAt(j);
            j++;
            setTimeout(typeWriterSubtitle, 28);
        }
    }
    setTimeout(typeWriterSubtitle, 600);
});