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
    this.frenchify = this.frenchify.bind(this);
  }
  // specify onClick event handler in button that calls a frenchify function on the HelloWorld class
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }
  // the frenchify function. NOTE: this function doesn't work, because we are modifying state object inside class directly!
  // error: Cannot read property 'setState' of undefined.
  // any events that need to access internal object details need to be explicitly bound to that instance of that component. aka, "this.frenchify" doesn't know how to call "this.setState" b/c it doesn't know what "this" is.
  // fix: add this.frenchify = this.frenchify.bind(this) to constructor. This tells JavaScript "Hey, anytime you see a ref to this inside frenchify function, refer specifically to ME"
  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }
}

// export the code for other files to use
export default HelloWorld;
