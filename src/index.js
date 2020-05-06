import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const fruits = [
 'kiwi',
 'Banana',
 'Avocado',
 'Cantaloupe',
 'Lychee',
 'Mango',
 'Apple',
 'Pineapple',
 'Pear',
'Strawberry'
]

ReactDOM.render(
  <React.StrictMode>
    <App  fruits={fruits}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
