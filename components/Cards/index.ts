import { createElement, addChild, addChildren } from '../Header/index.js';
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data: Record<string, string>): HTMLElement {
  const card = createElement('div', 'card');
  const headline = createElement('div', 'headline', data.headline);
  const author = createElement('div', 'author');
  const img = createElement('img', '') as HTMLImageElement;
  const byline = createElement('span', '', data.authorName);

  img.src = data.authorPhoto;

  addChildren(card, headline, author);
  addChildren(author, img, byline);
  return card;
}

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response: any): void => {
    const cardsContainer: HTMLElement | null = document.querySelector(
      '.cards-container'
    );
    console.log(response.data.articles);
    if (cardsContainer) {
      const articles: any = response.data.articles;

      for (const topic in response.data.articles) {
        articles[topic].forEach((article: any): void => {
          addChild(cardsContainer, createCard(article));
        });
      }
    }
  });
