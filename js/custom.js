jQuery(document).ready(function($) {
    "use strict";

//Quotation Array List
const quotation_list = [
  {
    name: "— Dalai Lama",
    quote: "The purpose of our lives is to be happy",
  },
  {
    name: " — John Lennon",
    quote: "Life is what happens when you’re busy making other plans.",
  },
  {
    name: "— Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    name: "— Albert Einstein",
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
  },
]

//Quotation varialbe
const btn_quote = document.querySelector("#btn_quote");
const quoteAuthor = document.querySelector("#quote_author");
const quote_blockquote = document.querySelector("#quote");

//Quotation Function Code
btn_quote.addEventListener("click",getQuote);

function getQuote (){
  const number = Math.floor(Math.random()*quotation_list.length);
  quoteAuthor.innerHTML = quotation_list[number].name;
  quote_blockquote.innerHTML = quotation_list[number].quote;

}

});
