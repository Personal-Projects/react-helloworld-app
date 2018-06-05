// tell JavaScript to import React library from the installed 'react' NPM module.
// to use states for dynamic modifications and interactions, need to switch from functional components to class components.
import React, { Component } from 'react';
// tell JavaScript to import the file App.css from the current folder indicated with '.'
import './HelloWorld.css';

// const is a constant function that cannot be changed
// () doesn't accept arguments, but props does.
// modify const to new ES2015 class
// modify "= props =>" to "extends Component" for HelloWorld component to extend the functionality of the Component class
// any class component in React needs to have a render() function that returns out JSX.
class HelloWorld extends Component {
  // JSX is templating language that look like HTML. Wrapped in {}, reserved word className.
  // React components must only return a SINGLE JSX node at its root! So wrap components that might have multiple children in single div.
  // content modification: add "this" keyword to props.name. This tells JavaScript that the component's properties live inside of the class.
  render() {
    return <div className="HelloWorld">Hello {this.props.name}!!!!! :))))</div>; // props is defined in App.js in "name="
  }
}

// export the code for other files to use
export default HelloWorld;
