import { createElement, addChild } from '../Header/index.js';
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(topic: string): HTMLElement {
  return createElement('div', 'tab', topic);
}

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response: any): void => {
    const topics: HTMLElement | null = document.querySelector('.topics');

    if (topics) {
      response.data.topics.forEach((topic: string): void => {
        addChild(topics, createTab(topic));
      });
    }
  })
  .catch((error: any): void => console.log(error));
