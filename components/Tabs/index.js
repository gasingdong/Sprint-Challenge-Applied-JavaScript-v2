import { createElement, addChild } from '../Header/index.js';
function createTab(topic) {
    return createElement('div', 'tab', topic);
}
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
    const topics = document.querySelector('.topics');
    if (topics) {
        response.data.topics.forEach((topic) => {
            addChild(topics, createTab(topic));
        });
    }
})
    .catch((error) => console.log(error));
