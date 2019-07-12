import { createElement, addChild, addChildren } from '../Header/index.js';
function createCard(data) {
  const card = createElement('div', 'card');
  const headline = createElement('div', 'headline', data.headline);
  const author = createElement('div', 'author');
  const img = createElement('img', '');
  const byline = createElement('span', '', data.authorName);
  img.src = data.authorPhoto;
  addChildren(card, headline, author);
  addChildren(author, img, byline);
  return card;
}
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const cardsContainer = document.querySelector('.cards-container');
    console.log(response);
    if (cardsContainer) {
      const articles = response.data.articles;
      for (const topic in response.data.articles) {
        articles[topic].forEach(article => {
          addChild(cardsContainer, createCard(article));
        });
      }
    }
  });
