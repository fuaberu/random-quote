const quote = document.getElementById('text');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

import { quotesList } from './quotes';

const randomQuote = () => {
	let random = Math.round(Math.random() * quotesList.length);
	quote.innerText = `"${quotesList[random].quote}"`;
	author.innerText = quotesList[random].author;
};
const randomColor = () => {
	let x = Math.round(Math.random() * 255);
	let y = Math.round(Math.random() * 255);
	let z = Math.round(Math.random() * 255);
	let o = Math.random() + 0.3;
	let bgColor = `rgba(${x},${y},${z},${o})`;
	document.body.style.backgroundColor = bgColor;
    newQuoteBtn.style.backgroundColor = bgColor;
	author.style.color = bgColor;
	quote.style.color = bgColor;
    
};

window.addEventListener('load', () => {
	randomColor();
	randomQuote();
});

newQuoteBtn.addEventListener('click', () => {
	randomColor();
	randomQuote();
});
