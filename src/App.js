// tell JavaScript to import React library from the installed 'react' NPM module.
import React from 'react';
// tell JavaScript to import the file App.css from the current folder indicated with '.'
import './App.css';
// tell JavaScript to import the HelloWorld component into App.js
import HelloWorld from './HelloWorld';
// const is a constant function that cannot be changed.
const App = () => {
  // All functional components return the JSX that tells React how to create a component.
  // JSX is templating language that look like HTML. Wrapped in {}, reserved word className.
  // React components must only return a SINGLE JSX node at its root! So wrap components that might have multiple children in single div.
  // root div renders a child HelloWorld component
  return (
    <div className="App">
      <HelloWorld name="Brian" />
      <HelloWorld name="Jaz" />
    </div>
  );
};

// export the code for other files to use
export default App;
