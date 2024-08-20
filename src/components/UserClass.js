// import React from "react";

import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
    };
    console.log("Child constructor called");
  }

  componentDidMount() {
    // component did mount is called after the render method. That's why we make Api calls in this method.
    console.log("Child componentDidMount" + this.props.type);
  }

  render() {
    console.log("Child render called");
    const { name, image, designation } = this.props;
    const { count } = this.state;
    return (
      <div className="team-member">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase
        </button>
        <img src={this.props.image} alt="Team Member 4"></img>
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    );
  }
}
export default UserClass;

// Class Based Component : it is a class which extends React.Component and has a render method which returns the JSX.
// Functional Component : it is a function which returns the JSX.

// render method is called whenever the state variable changes.
// render method is called whenever the props changes.
// render method is called whenever the parent component re-render.

// Difference between Class Component and Functional Component:
// 1. Class Component has a render method which returns the JSX.
// 2. Functional Component is a simple function which returns the JSX.
// 3. Class Component has a state variable and lifecycle methods.
// 4. Functional Component has a props and hooks.
// 5. Class Component has a this keyword.
// 6. Functional Component has a arrow function.
// 7. Class Component has a constructor method.
// 8. Functional Component has a useState hook.
// 9. Class Component has a lifecycle methods.
// 10. Functional Component has a useEffect hook.
// 11. Class Component has a setState method.

// Class based component is deprecated(Still supported by many s/w but not recommended by React).

// when we say we are loading the function based component on the web page(Rendering the component on the web page). (mounting or invoking function based component)

// when we say Loading the class based component that we are creating the instance of  the class and loading

// whenever we create the instance of the class the contructor method is called.

// That's why we create local state variable in the constructor method so whenver the instance is created the state variable is also created.

// this.state is a whole big object which contains all the state variables.
// this.setState is a method which is used to update the state variable.

// this.setState is a method which is used to update the state variable and re-render the component.

// In fucntional to store each state varibale we used to create a big boject behind the scene but in class based component we have a state object which contains all the state variables.

// Inside the state object we can store multiple state variables.but in setState we can update state variables but it will update only that you send as argument and don't touch the others .

// Let's see how we mount the class based components:
// 1. Whenever we create the instance of the class based component the constructor method is called.
// 2. Whenever we create the instance of the class based component the render method is called.
// 3. Whenever we create the instance of the class based component the componentDidMount method is called.
// 4. Whenever we create the instance of the class based component the componentDidUpdate method is called.
