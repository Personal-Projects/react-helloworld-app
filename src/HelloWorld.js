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
  // setup initial state.
  // implement a constructor for class (a function that is called when the class is used anywhere).
  // the following constructor function needs to:
  // 1) accept "props" as the only argument,
  // 2) call out to parent constructor, via super(props)
  // 3) set property on class called "state" via this.state
  // 4) set property to base object "greeting" with default value "Hello"
  // constructor() is a special function that ES2015 functions rely on to perform some actions when the class is used (aka instantiation)
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }
  // JSX is templating language that look like HTML. Wrapped in {}, reserved word className.
  // React components must only return a SINGLE JSX node at its root! So wrap components that might have multiple children in single div.
  // content modification: add "this" keyword to props.name. This tells JavaScript that the component's properties live inside of the class.
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
      </div> // props is defined in App.js in "name="
    );
  }
}

// export the code for other files to use
export default HelloWorld;
