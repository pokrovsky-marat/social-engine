import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




export let rerenderEntireTree = (state,addPost, changePost) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changePost={changePost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


