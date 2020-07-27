import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

const authors = [
  {
    name : 'Mark Twain',
    imageUrl : 'images/authors/marktwain.jfif',
    imageSource : 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn', 'Life in the Mississippie', 'Roughing it']
  }
]

const state = {
  turnData: {
    author : authors[0],
    books:  authors[0].books
  }
};

ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz {...state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
