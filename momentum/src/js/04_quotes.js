// 랜덤명언 보여주기
// 마우스를 올리면 명언밑에 author 정보 표시하기
const quotes = [
    {
        quote : "The road to success and the road to failure are almost exactly the same.",
        author : "Colin R. Davis"
    },
    {
        quote : "It is better to fail in originality than to succeed in imitation.",
        author : "Herman Melville"
    },
    {
        quote : "Success is walking from failure to failure with no loss of enthusiasm.",
        author : "Winston Churchill"
    },
    {
        quote : "All progress takes place outside the comfort zone.",
        author : "Michael John Bobak"
    },
    {
        quote : "Success usually comes to those who are too busy to be looking for it.",
        author : "Henry David Thoreau"
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney"
    },
    {
        quote : "Success seems to be connected with action. Successful people keep moving.",
        author : "Conrad Hilton"
    },
    {
        quote : "In order to succeed, we must first believe that we can.",
        author : "Nikos Kazantzakis"
    },
    {
        quote : "The only place where success comes before work is in the dictionary.",
        author : "Vidal Sassoon"
    }
];

const quoteBox = document.getElementById("quoteBox");
const quote = document.querySelector("#quoteBox span:first-child");
const author = document.querySelector("#quoteBox span:last-child");

const ranIdx = Math.floor(Math.random() * quotes.length);
quote.innerText = `"${quotes[ranIdx].quote}"`;
author.innerText = quotes[ranIdx].author;

function showAuthorHandler() {
    author.classList.remove("hidden1");
    author.classList.add("showAuthor");
}
function hideAuthorHandler() {
    author.classList.remove("showAuthor");
    author.classList.add("hidden1");
}

quoteBox.addEventListener("mouseenter", showAuthorHandler);
quoteBox.addEventListener("mouseleave", hideAuthorHandler);
