const quotes = [
  {
    quote: "Inhale, exhale, it is well, it is well. All of this is a part of the story you will tell.",
    author: "Morgan Harper Nichols",
  },
  {
    quote: "Courage is going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "When joy is habit, love is a reflex.",
    author: "Bob Goff",
  },
  {
    quote: "I’m going to make everything around me beautiful - that will be my life.",
    author: "Elsie de Wolfe",
  },
  {
    quote: "Beauty is not in the face; beauty is a light in the heart.",
    author: "Kahlil Gibran",
  },
  {
    quote: "The most beautiful people wear their hearts on their sleeves, and their souls in their smiles.",
    author: "Mark Anthony",
  },
  {
    quote: "I always find beauty in things that are odd and imperfect, they are much more interesting.",
    author: "Marc Jacobs",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Don’t compare your beginning to someone else’s middle.",
    author: "Jon Acuff",
  },
  {
    quote: "When you get tired, learn to rest, not quit.",
    author: "Banksy",
  },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math module -> 많은 function을 가지고 있음
//Math.floor -> 내림
//Math.random -> 난수 생성 (0.xxxx)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;