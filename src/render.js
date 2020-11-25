import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import {addPost} from "./redux/state"

export let rerenderEntireTree = (state,addPost) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} stateMethods={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


