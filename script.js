
const quotes = [
    { text: "You are not even worth the calories I burn talking to you", author: "Caroline" },
    { text: "There's more to me than just gloomy graveyard girl.", author: "Elena" },
    { text: "Some girls can't resist my good looks, my style, my charm, and my unflinching ability to listen to Taylor Swift", author: "Damon" },
    { text: "I live in the real world where vampires don't burn in the sun", author: "Damon" },
    { text: "I would die one hundred times over just to have you standing here alive, in front of me.", author: "Bonnie" },
    { text: "We both know I could rip you to shreds and do my nails at the same time.", author: "Katherine" },
    { text: "We choose our own path. Our values and our actions, they define who we are", author: "Stefan" }
];
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const getQuote = document.getElementById("getQuote");
getQuote.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex].text;
    quoteAuthor.innerText = "- " + quotes[randomIndex].author;
});
