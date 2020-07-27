import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name : 'Mark Twain',
    imageUrl : 'images/authors/marktwain.jfif',
    imageSource : 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn', 'Life in the Mississippie', 'Roughing it']
  },
  {
    name : 'J.k Rowling',
    imageUrl : 'images/authors/jkrowling.jfif',
    imageSource : 'Wikimedia Commons',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name : 'Stephen King',
    imageUrl : 'images/authors/stephenking.jfif',
    imageSource : 'Wikimedia Commons',
    books: ['The Shining', 'IT']
  },
  {
    name : 'Charles Dickens',
    imageUrl : 'images/authors/charlesdickens.jfif',
    imageSource : 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name : 'William Shakespeare',
    imageUrl : 'images/authors/williamshake.jfif',
    imageSource : 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  },

]

function getTurnData(authors) {
  // select a set of possible answers
  const allBooks = authors.reduce((p,c,i) => {
    return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books : fourRandomBooks,
    author : authors.find((author) => author.books.some((title) => title === answer)),
  }
}


const state = {
  turnData: getTurnData(authors),
  highlight : '',
};

function onAnswerSelected(title) {
  const correct = state.turnData.author.books.some((book) => book === title);
  state.highlight = correct ? 'correct' : 'wrong';
  render();
}

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <AuthorQuiz {...state} onAnswerSelected = {onAnswerSelected} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
