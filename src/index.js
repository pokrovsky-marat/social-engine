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
let dialogs = [
    {id: 0, name: "Traktorbek"},
    {id: 1, name: "Pete"},
    {id: 2, name: "Marat"},
    {id: 3, name: "Pat"},
    {id: 4, name: "John"},
    {id: 5, name: "Kate"},
    {id: 6, name: "Julia"},
    {id: 7, name: "Yuri"}
];
let messages = [
    {id: 0, text: "Hi"},
    {id: 1, text: "Hey, How is it going?"},
    {id: 2, text: "Bye-bye"},
];

ReactDOM.render(
  <React.StrictMode>
    <App arr={postsData} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


