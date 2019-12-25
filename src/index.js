import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogItem = [
    {id: 1, name: 'Anna Dogoda'},
    {id: 2, name: 'Arthur Jamison'},
    {id: 3, name: 'Winona Oak'},
    {id: 4, name: 'Den Luis'},
    {id: 5, name: 'Sam Smith'}
];

let dialogMessages =[
    {id: 1, message: 'Roma sit amet.'},
    {id: 2, message: 'Hello dolor sit.'},
    {id: 3, message: 'This is true ipsum dolor sit amet.'},
    {id: 4, message: 'Everything I do, I do it for you! ipsum dolor sit.'},
    {id: 5, message: 'Lorem sit amet.'}
];

let postsData = [
    {id: 1, likesCount: 12, text: 'Hey, why am I so happy?'},
    {id: 2, likesCount: 10, text: 'This is our new program for helping people.'}
];

ReactDOM.render(<App dialogMessages={dialogMessages} dialogItem={dialogItem} postsData={postsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
