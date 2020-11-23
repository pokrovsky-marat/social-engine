import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 0, message: "Hello my  sister-twister"},
    {id: 1, message: " bah bah bababah"},
    {id: 3, message: "Message 3"},
    {id: 4, message: "Hey, hey, hey, ya-ha-ha!!!"}
];
ReactDOM.render(
  <React.StrictMode>
    <App arr={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


