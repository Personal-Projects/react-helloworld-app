// tell JavaScript to import React library from the installed 'react' NPM module.
import React from 'react';
// tell JavaScript that we want the ReactDOM library out of the 'react-dom' NPM module
// ReactDOM allow use of render(), which tells React precisely HOW to throw a component into the browser.
import ReactDOM from 'react-dom';
// tell JavaScript to import the index.css file from current folder, which is our main global CSS file.
import './index.css';
// tell JavaScript to import the App component from a local file called "App.js". ES2015 knows any file beginning ./ is local, can leave off the .js
import App from './App';
// tell JavaScript to allow us access to implementing service workers for progressive web apps in our create react app.
import registerServiceWorker from './registerServiceWorker';

// render call: Render is a function that takes two arguments 1) which component to render, and 2) where to render that component.
// declare component using JSX as <App />
// where to render: document.getElementById('root'). Tells JavaScript to find an element on page which has an ID of 'root'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
